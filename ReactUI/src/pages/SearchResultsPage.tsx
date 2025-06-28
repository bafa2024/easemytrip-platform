import React from 'react';
import { Container } from 'react-bootstrap';
import SearchForm from '@components/search/SearchForm';
import FilterPanel from '@components/search/FilterPanel';
import FlightCard from '@components/search/FlightCard';
import SortBar from '@components/search/SortBar';

const SearchResultsPage: React.FC = () => {
  return (
    <Container className="py-4">
      <h1>Search Results</h1>
      {/* Add your search results implementation */}
    </Container>
  );
};

export default SearchResultsPage;