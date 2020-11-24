import React from "react";
import Staff from "../Components/Staff";
import img1 from "../Assets/person1.jpg";
import img2 from "../Assets/person2.jpg";
import img3 from "../Assets/person3.jpg";
import img4 from "../Assets/person4.jpg";

const StaffContainer = () => {
  const persons = [
    {
      image: img1,
      name: "Jacqueline",
      position: "Manager",
    },
    {
      image: img2,
      name: "Sara",
      position: "HR Manager",
    },
    {
      image: img3,
      name: "Sam",
      position: "Executive",
    },
    {
      image: img4,
      name: "Raul",
      position: "Salesman",
    },
  ];

  return (
    <section>
      <Staff persons={persons} />
    </section>
  );
};

export default StaffContainer;
