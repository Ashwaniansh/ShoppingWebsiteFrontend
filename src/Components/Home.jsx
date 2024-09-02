import React from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Card from './Card';
function Home() {
  return (
    <>
      <Navbar/>
      <Carousel/>

      <div className="container">
        <div className="row">
          <div className="col ">
            <Card />
          </div>
          <div className="col ">
            <Card />
          </div>
          <div className="col ">
            <Card />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Card />
          </div>
          <div className="col">
            <Card />
          </div>
          <div className="col">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

