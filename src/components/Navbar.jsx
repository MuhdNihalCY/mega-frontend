import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Mega Paints" className="h-10 mr-4" />
          <span className="text-xl font-bold">Mega Paints</span>
        </div>
        
        <div className="flex items-center space-x-6">
          {user?.designation === 'Admin' ? (
            <Link to="/admin" className="hover:text-blue-200">Admin Dashboard</Link>
          ) : (
            <Link to="/" className="hover:text-blue-200">Activity Board</Link>
          )}
          <div className="flex items-center">
            <span className="mr-4">{user?.userName}</span>
            <button 
              onClick={logout}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}