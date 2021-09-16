import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Category from '@/components/Category';
import Trending from '@/components/Trending';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="container px-4 lg:px-8 xl:px-16 py-2">
      <Header />
      <Hero />
      <Category />
      <Trending />
      <Footer />
    </div>
  );
}

export default App;
