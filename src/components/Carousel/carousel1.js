import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './carousel.css'

import image1 from './Images/image1.jpg';
import image2 from './Images/image2.jpg';
import image3 from './Images/image3.jpg';
import image4 from './Images/image4.jpg';
import image5 from './Images/image5.jpg';
import image6 from './Images/image6.jpg';
import image7 from './Images/image7.jpg';
import image8 from './Images/image8.jpg';
import image9 from './Images/image9.jpg';
import image10 from './Images/image10.jpg';
import image11 from './Images/image11.jpg';
import image12 from './Images/image12.jpg';
 
const images = [
  { src: image1, brand: "Brand X", price: "$100", description: "Short Description 1" },
  { src: image2, brand: "Brand 2", price: "$200", description: "Short Description 2" },
  { src: image3, brand: "Brand 3", price: "$300", description: "Short Description 3" },  
  { src: image4, brand: "Brand 4", price: "$400", description: "Short Description 4" },
  { src: image5, brand: "Brand 5", price: "$500", description: "Short Description 5" },
  { src: image6, brand: "Brand 6", price: "$600", description: "Short Description 6" },
  { src: image7, brand: "Brand 7", price: "$700", description: "Short Description 7" },
  { src: image8, brand: "Brand 8", price: "$800", description: "Short Description 8" },
  { src: image9, brand: "Brand 9", price: "$900", description: "Short Description 9" },
  { src: image10, brand: "Brand 10", price: "$1000", description: "Short Description 10" },
  { src: image11, brand: "Brand 11", price: "$11000", description: "Short Description 11" },
  { src: image12, brand: "Brand 12", price: "$12000", description: "Short Description 12" },

];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min:   1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


// All images transit at the same time with x images sper page 
const CarouselComponent = () => {
  const pageSize = 3;
  const pageCount = Math.ceil(images.length / pageSize);
  const pages = Array.from({ length: pageCount }, (_, i) => images.slice(i * pageSize, (i + 1) * pageSize)); 

  return (
    <Carousel
      interval={4000}
      responsive={responsive}
    >
      {pages.map((page, index) => (
        <Carousel.Item key={index}>

          <div className="d-flex justify-content-around">
            {page.map((image, idx) => (
              <div key={idx} className="carousel-image">
                <img src={image.src} alt={`Slide ${idx + 1}`} />
                <div className="carousel-content">
                  <h3>{image.brand}</h3>
                  <p>{image.price}</p>
                  <p>{image.description}</p>
                  <button>Rent now</button>
                </div>
              </div>
            // dotListClass="custom-dot-list-style"
            ))}
          </div>

        </Carousel.Item>
      ))}
    </Carousel>
  );
};


export default CarouselComponent;
