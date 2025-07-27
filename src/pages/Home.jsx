
import React from 'react';

import Hero from '../components/home/Hero';
import MovieCarousel from '../components/home/MovieCarousel';
import TestimonialCarousel from '../components/home/TestimonialCarousel';
import SellingPoints from '../components/home/SellingPoints';

const Home = () => {
  return (
    <div className="space-y-16">
      <Hero />
      <MovieCarousel />
      <SellingPoints />
      <TestimonialCarousel />
    </div>
  );
};

export default Home;