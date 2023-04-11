import React from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { presets, presetAccordionData } from "../data";
import PresetField from "./PresetField";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { addToCart, updateQty } from "../store/cart";

function Preset(props) {
  const cart = useSelector((state) => state.cartReducer.products);
  const dispatch = useDispatch();
  const { presetName } = useParams();
  const preset = presets.filter((preset) => preset.shortName === presetName)[0];

  function addItemToCart(item) {
    toast(`${item.name} Added To Cart!`, {
      duration: 2000,
      position: "bottom-center",
      style: { backgroundColor: "black", color: "white" },
    });
    for (const cartItem of cart) {
      if (cartItem.id === item.id) {
        console.log("match");
        dispatch(updateQty(item, 1));
        return;
      }
    }
    dispatch(addToCart(item));
  }

  return (
    <div className="flex flex-col items-center md:mt-16">
      <Toaster />
      <div className="flex flex-col items-center md:flex-row md:items-start w-4/5 lg:w-[65%] md:gap-10 lg:gap-24 lg:items-center">
        <section className="flex flex-col items-center  mt-8 md:mt-0">
          <img
            src={preset.imgURL}
            alt="Preset Image"
            className="lg:w-[1200px]"
          />
        </section>
        <div className="w-full">
          <h1 className="text-2xl font-bold my-4 md:text-4xl lg:text-5xl md:my-0 ">
            {preset.name}
          </h1>
          <div className="flex items-start w-full md:my-4">
            <h3 className="text-lg line-through md:text-2xl">
              ${preset.origPrice.toFixed(2)}
            </h3>
            <h3 className="text-lg text-red-500 ml-6 md:text-2xl">
              ${preset.price.toFixed(2)}
            </h3>
          </div>
          <hr className="my-6 text-gray-400" />
          <button
            className="w-full py-4 bg-black border-2 border-black text-white hover:bg-white hover:text-black hover:border-black hover:border-2 text-xl font-bold active:bg-gray-700 md:text-2xl ease-linear duration-200"
            onClick={() =>
              addItemToCart({
                id: preset.id,
                name: preset.name,
                price: preset.price,
                image: preset.imgURL,
                qty: 1,
              })
            }
          >
            Add to cart
          </button>
        </div>
      </div>
      <section className="w-4/5 my-12 lg:w-[65%]">
        <h2 className="text-xl font-bold md:text-3xl">
          Instantly transform your photos with presets that actually work.
        </h2>
        <p className="my-6 md:text-lg">
          This pack has all 54 of my Lightroom Presets from packs, Blues, Mood,
          Portraits, Orange and Teal, Golden, and Peaks. This pack will cover
          all types of photos and will keep your shots looking consistent and
          cohesive. It doesn’t matter what camera you are shooting with these
          presets will work with all cameras and photo styles. If you want a
          clean, consistent preset pack that actually works with your shots, The
          Master Collection is for you.
        </p>
        <div className="flex flex-col">
          {presetAccordionData.map((element) => (
            <PresetField data={element} key={uuidv4()} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Preset;
