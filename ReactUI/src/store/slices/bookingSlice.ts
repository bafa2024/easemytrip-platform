import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Flight } from '@types/flight.types';

interface Passenger {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  type: 'adult' | 'child' | 'infant';
  passport?: {
    number: string;
    expiry: string;
    country: string;
  };
}

interface BookingState {
  selectedFlight: Flight | null;
  passengers: Passenger[];
  contactInfo: {
    email: string;
    phone: string;
  };
  paymentMethod: string;
  couponCode: string | null;
  totalAmount: number;
  currentStep: number;
}

const initialState: BookingState = {
  selectedFlight: null,
  passengers: [],
  contactInfo: {
    email: '',
    phone: '',
  },
  paymentMethod: 'card',
  couponCode: null,
  totalAmount: 0,
  currentStep: 1,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setSelectedFlight: (state, action: PayloadAction<Flight>) => {
      state.selectedFlight = action.payload;
    },
    addPassenger: (state, action: PayloadAction<Passenger>) => {
      state.passengers.push(action.payload);
    },
    updatePassenger: (state, action: PayloadAction<{ id: string; data: Partial<Passenger> }>) => {
      const index = state.passengers.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.passengers[index] = { ...state.passengers[index], ...action.payload.data };
      }
    },
    setContactInfo: (state, action: PayloadAction<BookingState['contactInfo']>) => {
      state.contactInfo = action.payload;
    },
    setPaymentMethod: (state, action: PayloadAction<string>) => {
      state.paymentMethod = action.payload;
    },
    applyCoupon: (state, action: PayloadAction<string>) => {
      state.couponCode = action.payload;
    },
    setTotalAmount: (state, action: PayloadAction<number>) => {
      state.totalAmount = action.payload;
    },
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    resetBooking: () => initialState,
  },
});

export const {
  setSelectedFlight,
  addPassenger,
  updatePassenger,
  setContactInfo,
  setPaymentMethod,
  applyCoupon,
  setTotalAmount,
  setCurrentStep,
  resetBooking,
} = bookingSlice.actions;

export default bookingSlice.reducer;