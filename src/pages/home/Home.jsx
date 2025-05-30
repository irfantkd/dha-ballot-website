import React, { useState } from 'react';
import Cards from '../Cards/Cards';
import HeroSection from './components/HeroSection';
import CountdownTimerSection from './components/CountdownTimerSection';
// Hero Section Component

// Cards Component with Professional Design

// Main Home Component
const Home = () => {
  return (
    <>
      <HeroSection />
      <Cards />
      <CountdownTimerSection />
    </>
  );
};

export default Home;
