import React from "react";
import blog from "../Assets/blog.jpg";
import SectionHeader from "../Components/SectionHeader";
import CardsContainer from "../Containers/CardsContainer";

const Blog = () => {
  return (
    <div className="mt-5">
      <SectionHeader
        background={blog}
        title="Read our blog"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, soluta."
        outline="outline-primary"
      />
      <CardsContainer />
    </div>
  );
};

export default Blog;
