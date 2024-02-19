const TransactionsTable = ({ transactions, handlePrevPage, handleNextPage, page, totalPages, noResultsFound }) => {
  // console.log("page -> ", page, "totalpage -> ", totalPages)
  return (
    <>
      <div className='mx-5 my-2'>
        <table className='my-1 mx-auto table-auto border-separate border-spacing-1 border border-slate-500 rounded-lg min-w-[75vw] max-w-[85vw]'>
          <thead className='border'>
            <tr>
              <th className='border border-slate-600 px-2 py-1 rounded-lg'>ID</th>
              <th className='border border-slate-600 px-2 py-1 rounded-lg'>Title</th>
              <th className='border border-slate-600 px-2 py-1 rounded-lg'>Description</th>
              <th className='border border-slate-600 px-2 py-1 rounded-lg'>Price</th>
              <th className='border border-slate-600 px-2 py-1 rounded-lg'>Category</th>
              <th className='border border-slate-600 px-2 py-1 rounded-lg'>Sold</th>
              <th className='border border-slate-600 px-2 py-1 rounded-lg'>Image</th>
            </tr>
          </thead>
          <tbody>
            {noResultsFound ? <tr><td colSpan={7} className='rounded-lg border border-slate-700 px-2 text-center'>No items found try different keyword</td></tr> : transactions.map(transaction => (
              <tr key={transaction.id}>
                <td className='rounded-lg border border-slate-700 px-2 text-center'>{transaction.id}</td>
                <td className='rounded-lg border border-slate-700 px-2 text-center'>{transaction.title}</td>
                <td className='rounded-lg border border-slate-700 p-2 '>{transaction.description}</td>
                <td className='rounded-lg border border-slate-700 px-2 text-center'>{transaction.price}</td>
                <td className='rounded-lg border border-slate-700 px-2 text-center'>{transaction.category}</td>
                <td className='rounded-lg border border-slate-700 text-center font-bold '>{transaction.sold ? <p className="text-red-500 px-2">Sold</p> : <p className="text-green-600 px-2">Avalaible</p>}</td>
                <td className='rounded-lg border border-slate-700'>
                  <div className="flex justify-center">
                    <img className='rounded-lg max-w-[8vw] max-h-[20vh]' src={transaction.image} alt={transaction.image} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='flex justify-between items-center mx-3 my-2'>
          <span>Page No: {page}</span>
          <div>
            <button className='mx-3' onClick={handlePrevPage} disabled={page === 1} >Previous</button>
            <button className='mx-3' onClick={handleNextPage} disabled={totalPages === 1} >Next</button>
          </div>
          <span>Per Page: 10</span>
        </div>
      </div>
    </>
  );
};

export default TransactionsTable;
