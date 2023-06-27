import React from 'react';
import Nav from '../components/Nav';
import Slider from '../components/Slider';
import TopPicks from '../components/TopPicks';
import Collection from '../components/Collection';
import Footer from '../components/Footer';



function Home(){
  return (
    <div>
     <Nav />
     
      <Slider />
      <TopPicks />
      <br/>
      <br/>
      {/* <br/>
      <br/> */}
      <Collection />
      <br/>
      <br/>
      <Footer/>
    </div>
     );
};

export default Home;
