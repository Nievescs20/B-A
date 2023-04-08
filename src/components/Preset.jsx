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
      <div className="flex flex-col items-center md:flex-row md:items-start">
        <section className="flex flex-col items-center w-[90%] my-8 md:my-0 md:p-8">
          <img src={preset.imgURL} alt="Preset Image" />
        </section>
        <hr className="w-[90%] py-2 text-gray-400 md:hidden" />
        <div className="w-[90%] md:p-8">
          <h1 className="text-2xl font-bold my-4 md:text-4xl md:my-0">
            {preset.name}
          </h1>
          <div className="flex items-start w-full">
            <h3 className="text-lg line-through">
              ${preset.origPrice.toFixed(2)}
            </h3>
            <h3 className="text-lg text-red-500 ml-6">
              ${preset.price.toFixed(2)}
            </h3>
          </div>
          <button
            className="w-full py-4 border-black border-solid border-2 hover:bg-black hover:text-white text-xl font-bold active:bg-gray-700"
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
      <section className="w-[90%] my-12">
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
