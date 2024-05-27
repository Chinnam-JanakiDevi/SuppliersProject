
import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import AUNavbar from '../newNavbar/AUNavbar';

const ExampleCarouselImage = ({ src, alt }) => {
    return <img className="d-block w-100" src={src} alt={alt} />;
};

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Navbar />
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <ExampleCarouselImage src="https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMHN1cHBsaWVycyUyMGluJTIwZXZlbnRzfGVufDB8fDB8fHww" alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src="https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZCUyMHN1cHBsaWVycyUyMGluJTIwZXZlbnRzfGVufDB8fDB8fHww" alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src="https://media.istockphoto.com/id/1416840549/photo/radha-krishna-beautiful-statue-image-hd.webp?b=1&s=170667a&w=0&k=20&c=LV5GO4ox3nNgBe1GG2hS4kKgSB9mLQ7NIxeCRxm372Q=" alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Home;


const ExampleCarouselImage1 = ({ src, alt }) => {
    return <img className="d-block w-100" src={src} alt={alt} />;
};

export const AHome = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <AUNavbar />
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <ExampleCarouselImage1 src="https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMHN1cHBsaWVycyUyMGluJTIwZXZlbnRzfGVufDB8fDB8fHww" alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage1 src="https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZCUyMHN1cHBsaWVycyUyMGluJTIwZXZlbnRzfGVufDB8fDB8fHww" alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage1 src="https://media.istockphoto.com/id/1416840549/photo/radha-krishna-beautiful-statue-image-hd.webp?b=1&s=170667a&w=0&k=20&c=LV5GO4ox3nNgBe1GG2hS4kKgSB9mLQ7NIxeCRxm372Q=" alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}


// npm install react-bootstrap bootstrap
// npm install react-responsive-carousel

// npm install react-bootstrap bootstrap
// npm install react-responsive-carousel
