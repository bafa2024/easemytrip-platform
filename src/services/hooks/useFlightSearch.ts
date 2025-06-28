import { useState, useCallback } from 'react';
import { useQuery, useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { flightAPI } from '@services/api/flightAPI';
import { SearchParams, Flight } from '@types/flight.types';
import { setSearchResults, setSearchParams } from '@store/slices/searchSlice';

export const useFlightSearch = () => {
  const dispatch = useDispatch();
  const [isSearching, setIsSearching] = useState(false);

  const searchFlights = useCallback(async (params: SearchParams) => {
    setIsSearching(true);
    try {
      const results = await flightAPI.searchFlights(params);
      dispatch(setSearchParams(params));
      dispatch(setSearchResults(results));
      return results;
    } finally {
      setIsSearching(false);
    }
  }, [dispatch]);

  const { data: suggestions, refetch: searchAirports } = useQuery(
    ['airportSuggestions'],
    () => flightAPI.getAirportSuggestions(''),
    { enabled: false }
  );

  const trackPriceMutation = useMutation(
    ({ flightId, email }: { flightId: string; email: string }) =>
      flightAPI.trackPrice(flightId, email)
  );

  return {
    searchFlights,
    isSearching,
    searchAirports,
    suggestions,
    trackPrice: trackPriceMutation.mutate,
  };
};