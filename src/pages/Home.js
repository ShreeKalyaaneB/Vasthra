import React,{useEffect} from 'react';
import Nav from '../components/Nav';
import Slider from '../components/Slider';
import TopPicks from '../components/TopPicks';
import Collection from '../components/Collection';
import Footer from '../components/Footer';
import axios from '../url.js';
import Description from '../components/Description';
import StepDesc from '../components/StepDesc';


function Home(){
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/allsarees");
        const sareeData = response.data.saree;
        sareeData.forEach((saree) => {
          console.log(saree.fabric);
        });
  
        const responsee = await axios.get("/images");
        const imagesData = responsee.data;
        imagesData.forEach((i) => {
          console.log(i.imageUrl);
        });
  
        // Match IDs and make the POST request
        const matchingIDs = sareeData
          .map((saree) => saree._id)
          .filter((id) => imagesData.find((image) => image._id === id));
  
        matchingIDs.forEach(async (id) => {
          const matchingImage = imagesData.find((image) => image._id === id);
          try {
            await axios.post("/imageUrl", {
              imageUrl: matchingImage.imageUrl,
              ids: [id],
            });
            console.log("Image URL posted for ID:", id);
          } catch (error) {
            console.log("Error posting image URL for ID:", id, error);
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
  
      fetchData();
    
  }, []);
  return (
    <div>
     <Nav />
     
      <Slider />
      <br />
      <StepDesc />
      <br />
      <TopPicks />
      <br />
      <Description />
      <Collection />
      <br/>
      <br/>
      <Footer/>
    </div>
     );
};

export default Home;
