const TransactionsStatistics = ({ stats, selectedMonth }) => {
  const monthsName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  return (
    <div className="flex flex-col justify-center items-center m-3 p-2">
      <h2 className='text-[32px]'>Transactions Statistics - {monthsName[selectedMonth - 1]}</h2>
      <div className="m-2 p-2 border bg-yellow-200 text-black rounded-lg">
        <p className="p-2">Total sale amount: {stats.totalSaleAmount}</p>
        <p className="p-2">Total sold items: {stats.totalSoldItems}</p>
        <p className="p-2">Total not sold items: {stats.totalNotSoldItems}</p>
      </div>
    </div>
  );
};

export default TransactionsStatistics;
