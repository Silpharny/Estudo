import axios from "axios";

export const apiFinancas = axios.create({
    baseURL: 'https://666c5b0b49dbc5d7145dbe29.mockapi.io/',
    headers: {
        'Content-Type': 'application/json'
    }
  });
  