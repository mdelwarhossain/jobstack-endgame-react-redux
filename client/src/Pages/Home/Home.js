import React from 'react';
import Statistics from '../Statistics/Statistics';
import About from './AboutUs/About';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>

          <Banner></Banner>
          <About></About>
          <Statistics></Statistics>
</div>
    );
};

export default Home;