const TransactionsTable = ({ transactions, handlePrevPage, handleNextPage, page, totalPages, noResultsFound }) => {
  // console.log("page -> ", page, "totalpage -> ", totalPages)
  return (
    <>
      <div className='mx-5 my-2'>
        <table className='my-1 table-auto border-separate border-spacing-1 border border-slate-500 rounded-lg'>
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
            { noResultsFound ? <tr><td className='rounded-lg border border-slate-700 px-2 text-center'>No items found try different keyword</td></tr> : transactions.map(transaction => (
              <tr key={transaction.id}>
                <td className='rounded-lg border border-slate-700 px-2 text-center'>{transaction.id}</td>
                <td className='rounded-lg border border-slate-700 px-2 text-center'>{transaction.title}</td>
                <td className='rounded-lg border border-slate-700 p-2 '>{transaction.description}</td>
                <td className='rounded-lg border border-slate-700 px-2 text-center'>{transaction.price}</td>
                <td className='rounded-lg border border-slate-700 px-2 text-center'>{transaction.category}</td>
                <td className='rounded-lg border border-slate-700 '>{transaction.sold}</td>
                <td className='rounded-lg border border-slate-700 '> <img className='rounded-lg' src={transaction.image} alt={transaction.image} /></td>
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
