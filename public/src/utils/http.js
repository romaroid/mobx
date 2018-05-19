import axios from 'axios';

const API_URL = 'http://localhost:8000/graphql';

export const request = async (data = { query: '', variables: {} }, headers = {}) => {
  const response = await axios.post(API_URL, data, { headers });
  return response.data;
};
