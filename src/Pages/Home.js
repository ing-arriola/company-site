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
      <IconSection
        icons={[
          { name: "FaCog", title: "Working", background: "bg-light" },
          { name: "FaCloud", title: "Storage", background: "bg-light" },
          { name: "FaCartPlus", title: "Buying", background: "bg-light" },
        ]}
        color="text-dark"
        padding="py-5"
      />

      <HomeSection />
      <VideoContainer />
      <Gallery />
      <NewsLetter />
    </div>
  );
};

export default Home;
