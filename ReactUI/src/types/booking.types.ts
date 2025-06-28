export interface Booking {
  id: string;
  pnr: string;
  flightId: string;
  userId: string;
  passengers: Passenger[];
  totalAmount: number;
  status: 'confirmed' | 'pending' | 'cancelled';
  createdAt: string;
}

export interface Passenger {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  type: 'adult' | 'child' | 'infant';
}

export interface CreateBookingRequest {
  flightId: string;
  passengers: Passenger[];
  contactInfo: {
    email: string;
    phone: string;
  };
  paymentMethod: string;
}