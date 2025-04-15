import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

// Get all lists for the current user's branch
export const getLists = async (page = 1, limit = 100) => {
  try {
    console.log("getLists called");
    const response = await axios.get(`${API_URL}/lists`, {
      params: { page, limit },
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Get cards with optional list filter
export const getCards = async (listId = null, page = 1, limit = 50) => {
    console.log("getCards called");
  try {
    const params = { page, limit };
    if (listId) params.listId = listId;
    
    const response = await axios.get(`${API_URL}/cards`, {
      params,
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Get single card details
export const getCardDetails = async (cardId) => {
    console.log("getCardDetails called");
  try {
    const response = await axios.get(`${API_URL}/cards/${cardId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Create new card
export const createCard = async (cardData) => {
    console.log("createCard called");
  try {
    const response = await axios.post(`${API_URL}/cards`, cardData, {
      headers: { 
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};