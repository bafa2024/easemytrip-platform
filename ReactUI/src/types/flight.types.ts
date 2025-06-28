export interface Airport {
  code: string;
  name: string;
  city: string;
  country: string;
}

export interface Flight {
  id: string;
  airline: string;
  flightNumber: string;
  departure: {
    airport: Airport;
    time: string;
    date: string;
  };
  arrival: {
    airport: Airport;
    time: string;
    date: string;
  };
  duration: string;
  stops: number;
  stopInfo?: string;
  price: number;
  currency: string;
  class: 'Economy' | 'Premium Economy' | 'Business' | 'First';
  baggage: string;
  seatsAvailable: number;
  refundable: boolean;
}

export interface SearchParams {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate?: string;
  passengers: {
    adults: number;
    children: number;
    infants: number;
  };
  class: string;
  tripType: 'oneway' | 'roundtrip' | 'multicity';
}