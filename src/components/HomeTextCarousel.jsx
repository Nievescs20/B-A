import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const TextCarousel = () => {
  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      autoPlay
      infiniteLoop
      interval={5000}
      className='w-[340px] md:w-[500px]'
    >
      <div className='text-justify text-lg lg:text-xl'>
        <p>As a child growing up in Upstate New York, I was always captivated by the world around me. I had an innate curiosity that led me to explore every nook and cranny of my surroundings, always searching for my next adventure.</p>
        <br/>
        <p>As I grew older, I found that I had a talent for capturing moments and memories through photography. I began to experiment with different cameras and techniques, and soon found that I had a true passion for the art of photography. I’ve spent countless hours researching books, watching online tutorials, as well as attending a few classes to learn the art of the craft.</p>
      </div>
      <div className='text-justify text-lg lg:text-xl'>
        <p>Today, at 21 years old I am proud to call myself a photographer. I specialize in capturing the beauty of the natural world. But more than anything I am grateful for the opportunity to share my passions with others, and to help capture their own moments and memories. Whether I am shooting a wedding, a landscape, or a portrait.</p>
        <br/>
        <p>
        I approach every project with the same level of passion and commitment. Every image has the power to inspire, evoke emotion, as well as tell a story. I am blessed to be able to share that power with the world.</p>
      </div>
    </Carousel>
  );
};

export default TextCarousel;
