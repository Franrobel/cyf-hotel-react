import React from "react";
import TouristInfoCards from "../TouristInfoCards";

const cities = [
  {
    name: "Glasgow",
    imagen:
      "https://media.istockphoto.com/photos/glasgow-scotland-picture-id830486350?k=20&m=830486350&s=612x612&w=0&h=MAhMQzowOAFSx7FskDIlPmdBioY56XQ8SSsGf3QIKLQ=",
    enlace: "https://www.peoplemakeglasgow.com",
    descripcion: "Esto es Reino Unido"
  },
  {
    name: "Manchester",
    imagen: "https://img.bekiaviajes.com/articulos/74000/74570/7-t1.jpg",
    enlace: "https://www.visitmanchester.com/",
    descripcion: "Manchester"
  },
  {
    name: "London",
    imagen:
      "https://media.istockphoto.com/photos/boulevard-next-to-the-river-thames-picture-id1133845967?s=612x612",
    enlace: "https://www.visitlondon.com",
    descripcion: "London"
  }
];

const ToCards = () => {
  return (
    <div className="cards-container">
      {" "}
      {cities.map((city, i) => {
        return (
          <TouristInfoCards
            key={i}
            name={city.name}
            imagen={city.imagen}
            enlace={city.enlace}
            descripcion={city.descripcion}
          />
        );
      })}
    </div>
  );
};

export default ToCards;
