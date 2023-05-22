import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import HomeTextCarousel from "./HomeTextCarousel"

function Home() {
  return (
    <div>
      <section
        className="h-[91vh] bg-Main bg-cover
    font-[Poppins] md:bg-top bg-center"
    // className="flex items-center justify-center h-screen"
    // style={{
    //   animation: 'fade 5s linear forwards',
    //   backgroundImage: 'url("/images/mountain_river.jpg")',
    //   backgroundSize: 'cover',
    // }}
      >
        <div className="flex flex-col justify-center text-center items-center h-3/4">
          <h1 className="md:text-5xl text-3xl text-black font-semibold py-5 bg-white px-4">
            @SirRohu
          </h1>
        </div>
      </section>
      <section className="min-h-[75vh] lg:flex py-16 md:py-40 lg:mx-auto lg:max-w-[70%] lg:justify-between w-[90%] mx-auto">
        <div className="flex">
          <img
            className="min-[550px]:max-h-[400px] min-[550px]:max-w-[400px] md:max-h-[500px] md:max-w-[500px] mx-auto h-auto"
            src="/images/SirRohu.png"
            alt="profile-pic"
          />
        </div>
        <div className="flex flex-col items-start max-w-[400px] min-w-[250px] mt-8 mx-auto min-[550px]:max-w-[400px] md:max-w-[500px] lg:min-w-[40%] lg:m-32 lg:mt-0">
          <h1 className="font-bold text-6xl mb-4">Brandon Amorosi</h1>
          <div>
            {/* <p className="text-justify text-2xl">
            As a child growing up in Upstate New York, I was always captivated by the world around me. I had an innate curiosity that led me to explore every nook and cranny of my surroundings, always searching for my next adventure.
            <br/>
            <br/>
            As I grew older, I found that I had a talent for capturing moments and memories through photography. I began to experiment with different cameras and techniques, and soon found that I had a true passion for the art of photography. I’ve spent countless hours researching books, watching online tutorials, as well as attending a few classes to learn the art of the craft.
            </p> */}
            <HomeTextCarousel/>
            <Link to="contact-me">
              <button className="bg-black text-white py-2 px-2 rounded-md mt-4 text-lg">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="px-8 md:px-20 flex justify-center items-center">
        <div className="relative w-full md:max-w-[85%] md:max-h-[50%] pb-[56.25%] h-0">
          {/* <iframe
            className="absolute top-0 left-0 w-full h-full"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/AHrCI9eSJGQ?controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe> */}
          <iframe className="absolute top-0 left-0 w-full h-4/5" width="560" height="315" src="https://www.youtube.com/embed/lKV2ipMjv5E?loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </section>
      <section className="min-h-[68vh] md:min-h-[40vh] md:flex md:justify-between md:items-center pt-0 px-8 md:py-20 lg:w-4/5 lg:justify-center lg:px-0 lg:m-auto lg:py-5 lg:min-h-[40vh]">
        <div className="flex flex-wrap max-w-[500px] justify-center items-center md:py-10 md:min-w-[325px] max-h-[550px]">
          <Fade left>
            <img
              src="https://halunen.github.io/HomePage/img/Railroad.jpg"
              // style={{
              //   height: "100px",
              //   width: "40%",
              //   margin: "5px",
              // }}
              className="h-[100px] w-[120px] lg:h-[175px] lg:w-[210px] m-2"
            />
          </Fade>
          <Fade top>
            <img
              src="https://i.shgcdn.com/77039ecd-7cb1-4455-9d56-14be9d5e8385/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
              // style={{
              //   height: "100px",
              //   width: "40%",
              //   margin: "5px",
              // }}
              className="h-[100px] w-[120px] lg:h-[175px] lg:w-[210px] m-2"
            />
          </Fade>
          <Fade bottom>
            <img
              src="https://www.nrm.org/wp2016/wp-content/uploads/2023/02/st1976_14993-500x500.jpg"
              // style={{
              //   height: "100px",
              //   width: "40%",
              //   margin: "5px",
              // }}
              className="h-[100px] w-[120px] lg:h-[175px] lg:w-[210px] m-2"
            />
          </Fade>
          <Fade right>
            <img
              src="https://s3-eu-west-1.amazonaws.com/assets.botanic.cam.ac.uk/wp-content/uploads/2023/02/Tony-North-408520-500x500.jpg"
              // style={{
              //   height: "100px",
              //   width: "40%",
              //   margin: "5px",
              // }}
              className="h-[100px] w-[120px] lg:h-[175px] lg:w-[210px] m-2"
            />
          </Fade>
        </div>
        <div className="my-4 md:max-w-[450px] lg:max-w-[60%]">
          <h2 className="text-gray-500">ADOBE</h2>
          <h1 className="font-bold text-3xl">Lightroom Presets</h1>
          <div>
            <p className="text-justify text-2xl">
            It can be extremely frustrating and time-consuming to edit photos. Trust me, I understand. That’s why I created a collection of presets that simplify the editing process and give your photos that perfect touch. My presets are compatible with Adobe Lightroom as well as Camera Raw. With a range of options to chose from, my presets can help you achieve the perfect look to your photos, below you can find all varieties of my presets. As well as LUT’s to bring your video footage to the next level.
            </p>
            <div className="w-[80%] flex justify-between md:w-[60%] lg:w-[40%]">
              <button className="bg-black text-white py-2 px-2 rounded-md mt-2">
                Collection #1
              </button>
              <button className="bg-black text-white py-2 px-2 rounded-md mt-2">
                Collection #2
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-Photographer">
          <img
            className="bg-cover md:bg-top bg-center"
            src="/images/candid.jpeg"
          />
        </div>
        {/* <div className="min-h-[55vh] bg-black relative flex flex-col justify-center min-[400px]:min-h-[40vh] md:min-h-[30vh]"> */}
          {/* <div className="bg-white max-w-[90vw] left-5 top-[-10px] absolute opacity-90 z-10 sm:left-9 md:left-10 lg:left-12">
            <div className="flex flex-col items-center mt-8">
              <h1 className="font-bold text-3xl pb-6">Where to Find Me</h1>
              <p className="text-justify px-2">
                Nullam iaculis sapien vitae rutrum condimentum. Nullam nulla
                nunc, viverra quis massa eu, pellentesque laoreet tortor.
                Quisque accumsan nibh pulvinar ante scelerisque, quis pharetra
                nunc imperdiet. Proin et nunc lectus. Orci varius natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Sed volutpat odio quam, ultricies venenatis risus ultricies
                sed.
              </p>
              <button className="bg-black text-white py-2 px-4 rounded-md my-2 self-start ml-2">
                @SirRohu
              </button>
            </div>
          </div> */}
        {/* </div> */}
      </section>
    </div>
  );
}

export default Home;
