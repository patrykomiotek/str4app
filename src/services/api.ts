import axios from 'axios';

// axios.get('endpoint')
// axios.post('endpoint', { data })

const AIRTABLE_API_URL = import.meta.env.VITE_API_BASE_URL;
const AIRTABLE_API_TOKEN = import.meta.env.VITE_API_TOKEN;

export const api = axios.create({
  baseURL: AIRTABLE_API_URL,
  headers: {
    Authorization: `Bearer ${AIRTABLE_API_TOKEN}`,
    'Content-Type': 'application/json',
  },
});
