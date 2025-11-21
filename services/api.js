// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sinavita-admin.flameoflames.com/api', // Update with your API URL
  headers: {
    'Content-Type': 'application/json'
  }
});

// Optionally, you can add interceptors for logging or token attachment here.
export default api;