import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@store/store';
import FlightCard from '../FlightCard';

const mockFlight = {
  id: '1',
  airline: 'Air India',
  flightNumber: 'AI 302',
  departure: {
    airport: { code: 'DEL', name: 'Indira Gandhi Intl', city: 'Delhi', country: 'India' },
    time: '10:30',
    date: '2024-12-25',
  },
  arrival: {
    airport: { code: 'BOM', name: 'Chhatrapati Shivaji', city: 'Mumbai', country: 'India' },
    time: '12:45',
    date: '2024-12-25',
  },
  duration: '2h 15m',
  stops: 0,
  price: 9500,
  currency: 'INR',
  class: 'Economy' as const,
  baggage: '25 kg',
  seatsAvailable: 5,
  refundable: true,
};

describe('FlightCard', () => {
  it('renders flight details correctly', () => {
    render(
      <Provider store={store}>
        <FlightCard flight={mockFlight} />
      </Provider>
    );

    expect(screen.getByText('Air India')).toBeInTheDocument();
    expect(screen.getByText('AI 302')).toBeInTheDocument();
    expect(screen.getByText('10:30')).toBeInTheDocument();
    expect(screen.getByText('12:45')).toBeInTheDocument();
    expect(screen.getByText('₹9,500')).toBeInTheDocument();
  });

  it('shows warning for low seat availability', () => {
    render(
      <Provider store={store}>
        <FlightCard flight={mockFlight} />
      </Provider>
    );

    expect(screen.getByText('5 seats left')).toBeInTheDocument();
  });

  it('expands details on click', () => {
    render(
      <Provider store={store}>
        <FlightCard flight={mockFlight} />
      </Provider>
    );

    const expandButton = screen.getByRole('button', { name: /expand/i });
    fireEvent.click(expandButton);

    expect(screen.getByText(/Baggage Information/i)).toBeInTheDocument();
  });
});