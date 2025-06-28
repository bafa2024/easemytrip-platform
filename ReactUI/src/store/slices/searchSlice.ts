import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Flight, SearchParams } from '@types/flight.types';

interface SearchState {
  params: SearchParams | null;
  results: Flight[];
  filters: {
    stops: number | null;
    airlines: string[];
    priceRange: [number, number];
    departureTime: string;
  };
  sortBy: 'price' | 'duration' | 'departure';
  isLoading: boolean;
}

const initialState: SearchState = {
  params: null,
  results: [],
  filters: {
    stops: null,
    airlines: [],
    priceRange: [0, 100000],
    departureTime: 'all',
  },
  sortBy: 'price',
  isLoading: false,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchParams: (state, action: PayloadAction<SearchParams>) => {
      state.params = action.payload;
    },
    setSearchResults: (state, action: PayloadAction<Flight[]>) => {
      state.results = action.payload;
      state.isLoading = false;
    },
    setFilters: (state, action: PayloadAction<Partial<SearchState['filters']>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setSortBy: (state, action: PayloadAction<SearchState['sortBy']>) => {
      state.sortBy = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setSearchParams,
  setSearchResults,
  setFilters,
  setSortBy,
  setLoading,
} = searchSlice.actions;

export default searchSlice.reducer;