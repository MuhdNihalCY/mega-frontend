import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AdminDashboard from "./pages/AdminDashboard";
import KanbanBoard from "./pages/KanbanBoard";
import PrivateRoute from "./components/PrivateRoute";
import { useAuth } from "./context/AuthContext";
import Dashboard from "./pages/AdminDashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              {user?.designation === "Admin" ? (
                <AdminDashboard />
              ) : (
                <KanbanBoard />
              )}
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
