import React from 'react';
import HeroSearch from '@components/home/HeroSearch';
import DealsSection from '@components/home/DealsSection';
import PopularDestinations from '@components/home/PopularDestinations';
import TrustBadges from '@components/home/TrustBadges';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSearch />
      <DealsSection />
      <PopularDestinations />
      <TrustBadges />
    </>
  );
};

export default HomePage;