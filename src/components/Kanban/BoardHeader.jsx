import { useAuth } from '../../context/AuthContext';

const BoardHeader = ({ onAddCustomer, searchMode, setSearchMode, searchQuery, setSearchQuery }) => {
  const { user } = useAuth();

  return (
    <div className="bg-white shadow-md py-4 px-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-800">MEGA PAINTS ACTIVITY BOARD</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <span className="text-gray-700">{user?.userName}</span>
          
          <button 
            onClick={onAddCustomer}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Create Customer
          </button>
          
          <div className="relative">
            <select
              value={searchMode}
              onChange={(e) => setSearchMode(e.target.value)}
              className="border rounded-l-lg px-3 py-2 focus:outline-none"
            >
              <option value="all">Search All</option>
              <option value="customer">Customer Name</option>
              <option value="card">Card Name</option>
            </select>
            
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-t border-b border-r rounded-r-lg px-4 py-2 focus:outline-none w-64"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardHeader;