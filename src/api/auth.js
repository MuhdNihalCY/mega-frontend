import React from 'react'
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const { login, logout, user, accessToken } = useAuth();

  const handleLogin = async () => {
    const email = "user@example.com";
    const password = "password";
    await login(email, password);
  };

  const handleLogout = () => {
    logout();
  };

  if (user) {
    return (
      <div>
        <p>Welcome, {user.userName}!</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};






// import axios from 'axios'
// import api from './api'

// // const API_URL = 'http://localhost:3000/api/auth' // Adjust this to match your backend API

// // // Set up axios instance
// // const api = axios.create({
// //   baseURL: API_URL,
// //   headers: {
// //     'Content-Type': 'application/json',
// //   },
// // })

// // Add a request interceptor to include the token in headers
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token')
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`
//   }
//   return config
// }, (error) => {
//   return Promise.reject(error)
// })

// export const registerUser = async (userData) => {
//   try {
//     const response = await api.post('/auth/register', userData)
//     return response.data
//   } catch (error) {
//     throw error
//   }
// }

// export const loginUser = async (credentials) => {
//   try {
//     const response = await api.post('/auth/login', credentials)
//     return response.data
//   } catch (error) {
//     throw error
//   }
// }

// // Add more API calls as needed