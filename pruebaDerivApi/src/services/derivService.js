import axios from 'axios';

const DERIV_API_URL = 'https://api.deriv.com';
const API_TOKEN = 'IRuszy0GIorZNpx'; // Reemplaza con tu token de la API

export const getMarketData = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/markets');
    return response.data;
  } catch (error) {
    console.error('Error fetching market data:', error);
    throw error;
  }
};
