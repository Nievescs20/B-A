import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { SignIn, SignUp } from "@clerk/clerk-react";
import ContactMe from "./ContactMe";
import Home from "./Home";
import MyWork from "./MyWork";
import Presets from "./Presets";
import Preset from "./Preset";
import Luts from "./Luts";
import Photography from "./Photography";
import Videography from "./Videography";
import Confirmation from "./Confirmation";

const RoutesComponent = ({ setCartOpen }) => {
  return (
    <div onClick={() => setCartOpen(false)}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-me" element={<ContactMe />} />
        <Route path="/my-work" element={<MyWork />} />
        <Route path="/presets" element={<Presets />} />
        <Route path="/luts" element={<Luts />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/videography" element={<Videography />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/presets/:presetName" element={<Preset />} />
        <Route
          path="/sign-in/*"
          element={
            <div className="flex justify-center items-center my-4">
          <SignIn routing="path" path="/sign-in" />
          </div>
        }
        />
        <Route
          path="/sign-up/*"
          element={<SignUp routing="path" path="/sign-up" />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default RoutesComponent;
