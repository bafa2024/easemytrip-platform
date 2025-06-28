import axios from 'axios';
import { Flight, SearchParams, Airport } from '@types/flight.types';
const API_BASE = process.env.REACT_APP_API_BASE_URL;

export const flightAPI = {
  searchFlights: async (params: SearchParams): Promise<Flight[]> => {
    try {
      const response = await axios.post(`${API_BASE}/flights/search`, params);
      return response.data.flights;
    } catch (error) {
      console.error('Flight search error:', error);
      throw error;
    }
  },

  getFlightDetails: async (flightId: string): Promise<Flight> => {
    const response = await axios.get(`${API_BASE}/flights/${flightId}`);
    return response.data;
  },

  getAirportSuggestions: async (query: string): Promise<Airport[]> => {
    const response = await axios.get(`${API_BASE}/airports/search`, {
      params: { q: query }
    });
    return response.data;
  },

  getPriceCalendar: async (origin: string, destination: string, month: string) => {
    const response = await axios.get(`${API_BASE}/flights/calendar`, {
      params: { origin, destination, month }
    });
    return response.data;
  },

  trackPrice: async (flightId: string, email: string) => {
    const response = await axios.post(`${API_BASE}/flights/track-price`, {
      flightId,
      email
    });
    return response.data;
  }
};