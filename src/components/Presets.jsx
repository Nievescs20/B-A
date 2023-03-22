import React from "react";
import Fade from "react-reveal/Fade";
import { presets } from "../data";

function Presets() {
  return (
    <div className="px-[5%] flex flex-col items-center">
      <h1 className="text-5xl my-8 font-bold">Presets</h1>
      <div className="flex flex-wrap justify-around">
        {presets.map((preset) => (
          <div key={preset.name} className="my-4">
            <Fade top cascade>
              <img
                className="h-[150px] w-[150px] md:h-[300px] md:w-[300px] lg:h-[450px] lg:w-[450px]"
                src={preset.imgURL}
                alt={preset.alt}
              />
              <div className="my-2">
                <p className="text-2xl w-[150px] md:w-[300px] lg:w-[450px]">
                  {preset.name}
                </p>
                <div className="flex my-2">
                  <h2 className="text-base line-through mr-4">
                    ${preset.origPrice.toFixed(2)}
                  </h2>
                  <h2 className="text-base text-red-500">
                    ${preset.price.toFixed(2)}
                  </h2>
                </div>
              </div>
            </Fade>
          </div>
        ))}
        {/* <Fade top cascade>
          <div>
            <h2>React Reveal</h2>
            <h2>React Reveal</h2>
            <h2>React Reveal</h2>
          </div>
        </Fade> */}
      </div>
    </div>
  );
}

export default Presets;
