import apiClient from './apiClient';
import { Booking, CreateBookingRequest } from '@types/booking.types';

export const bookingAPI = {
  createBooking: async (data: CreateBookingRequest): Promise<Booking> => {
    return apiClient.post('/bookings', data);
  },

  getBooking: async (bookingId: string): Promise<Booking> => {
    return apiClient.get(`/bookings/${bookingId}`);
  },

  getUserBookings: async (): Promise<Booking[]> => {
    return apiClient.get('/bookings/user');
  },

  cancelBooking: async (bookingId: string): Promise<void> => {
    return apiClient.post(`/bookings/${bookingId}/cancel`);
  },

  modifyBooking: async (bookingId: string, data: Partial<Booking>): Promise<Booking> => {
    return apiClient.put(`/bookings/${bookingId}`, data);
  },

  validateCoupon: async (code: string, amount: number): Promise<{
    valid: boolean;
    discount: number;
    message: string;
  }> => {
    return apiClient.post('/coupons/validate', { code, amount });
  },
};