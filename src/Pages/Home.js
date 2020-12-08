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
          {
            name: "FaHamburger",
            title: "Enjoy Fast food",
            background: "bg-light",
          },
          {
            name: "FaBirthdayCake",
            title: "Free lunch in your birthday",
            background: "bg-light",
          },
          {
            name: "FaFish",
            title: "Delicious seafood",
            background: "bg-light",
          },
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
