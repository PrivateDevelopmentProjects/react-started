import React from "react";
import ServiceComponent from "../ServiceComponent";
import img1 from "./img1.svg";
import img2 from "./img2.svg";
import img3 from "./img3.svg";
import "./style.css";

const services = [
  {
    title: "Service 1",
    description: "Service 1 placeholder test description",
    image: img1,
  },
  {
    title: "Service 2",
    description: "Service 2 placeholder test description",
    image: img2,
  },
  {
    title: "Service 3",
    description: "Service 3 placeholder test description",
    image: img3,
  },
];

const Services = () => {
  return (
    <div className="services">
      {services.map((s, index) => (
        <ServiceComponent
          key={index}
          title={s.title}
          description={s.description}
          image={s.image}
        />
      ))}
    </div>
  );
};

export default Services;
