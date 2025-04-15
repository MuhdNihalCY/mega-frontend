import axios from 'axios'

const API_URL = 'http://localhost:3000/api/auth' // Adjust this to match your backend API

// Set up axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add a request interceptor to include the token in headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

export const registerUser = async (userData) => {
  try {
    const response = await api.post('/register', userData)
    return response.data
  } catch (error) {
    throw error
  }
}

export const loginUser = async (credentials) => {
  try {
    const response = await api.post('/login', credentials)
    return response.data
  } catch (error) {
    throw error
  }
}

// Add more API calls as needed