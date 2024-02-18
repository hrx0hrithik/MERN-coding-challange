import { useState, useEffect } from 'react';
import TransactionsTable from './components/TransactionTable';
import TransactionsStatistics from './components/TransactionsStatistics';
import TransactionsBarChart from './components/TransactionsBarChart';
import TransactionPieChart from './components/TransactionPieChart';

const BackendUrl = 'http://localhost:8000';

const TransactionsPage = () => {
    const [transactions, setTransactions] = useState([]);
    const [filteredTransactions, setFilteredTransactions] = useState([]);
    const [noResultsFound, setNoResultsFound] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState('3');
    const [searchText, setSearchText] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [stats, setStats] = useState({});
    const [chartData, setChartData] = useState([]);
    const [pieChartData, setPieChartData] = useState([]);

    useEffect(() => {
        fetchTransactions(selectedMonth);
        fetchStatistics(selectedMonth);
        fetchChartData(selectedMonth);
        fetchPieChartData(selectedMonth)
    }, [selectedMonth, page]);

    const fetchTransactions = async (month) => {
        try {
            const response = await fetch(`${BackendUrl}/api/transactions?month=${month}`);
            const data = await response.json();
            setFilteredTransactions([])
            setTransactions(data.transactions);
            setTotalPages(data.totalPages)
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    };

    const fetchStatistics = async (month) => {
        try {
            const response = await fetch(`${BackendUrl}/api/statistics?month=${month}`);
            const data = await response.json();
            setStats(data);
        } catch (error) {
            console.error('Error fetching statistics:', error);
        }
    };

    const fetchChartData = async (month) => {
        try {
            const response = await fetch(`${BackendUrl}/api/bar-chart?month=${month}`);
            const data = await response.json();
            setChartData(data);
        } catch (error) {
            console.error('Error fetching chart data:', error);
        }
    }
    const fetchPieChartData = async (month) => {
        try {
            const response = await fetch(`${BackendUrl}/api/pie-chart?month=${month}`);
            const data = await response.json();
            console.log(data)
            setPieChartData(data);
        } catch (error) {
            console.error('Error fetching chart data:', error);
        }
    }

    const handleSearch = (searchText) => {
        setSearchText(searchText);
        if(searchText === ""){
            setFilteredTransactions(transactions)
        }
        else{
        const filteredTransactions = transactions.filter(transaction =>
            transaction.title.toLowerCase().includes(searchText.toLowerCase()) ||
            transaction.description.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredTransactions(filteredTransactions);
        if(filteredTransactions.length === 0){
            setNoResultsFound(true)
        }else{
            setNoResultsFound(false)
        }
        }
    };


    const handleNextPage = () => {
        setPage(page + 1);
    };

    const handlePrevPage = () => {
        setPage(page - 1);
    };

    return (
        <div>
            <h2 className='text-[32px] text-center'>Transactions Table</h2>
            <div className='flex justify-between'>
                <input className='p-2 mx-4 my-3 text-center rounded-lg' type="text" value={searchText} onChange={(e) => handleSearch(e.target.value)} placeholder="Search transactions" />
                <select className='p-2 mx-4 my-3 text-center rounded-md' value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option defaultChecked value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
            </div>
            <TransactionsTable 
             transactions={filteredTransactions.length ? filteredTransactions : transactions } 
             handlePrevPage={handlePrevPage} 
             handleNextPage={handleNextPage} 
             page={page} 
             totalPages={totalPages} 
             noResultsFound={noResultsFound}
            />
            <TransactionsStatistics stats={stats} selectedMonth={selectedMonth} />
            <TransactionsBarChart chartData={chartData} />
            <TransactionPieChart pieChartData={pieChartData} />
        </div>
    );
};

export default TransactionsPage;
