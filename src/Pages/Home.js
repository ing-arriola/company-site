import React from "react";
import Carrousel from "../Components/Carrousel";
import IconSection from "../Containers/IconSection";
import HomeSection from "../Containers/HomeSection";
import VideoContainer from "../Containers/VideoContainer";
import Gallery from "../Components/Gallery";
import NewsLetter from "../Components/NewsLetter";

const Home = () => {
  return (
    <div>
      <Carrousel />
      <IconSection />
      <HomeSection />
      <VideoContainer />
      <Gallery />
      <NewsLetter />
    </div>
  );
};

export default Home;
