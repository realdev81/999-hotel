import React from "react";
import { Outlet } from "react-router-dom";
// @ts-ignore
import Header from "../../components/ui/Header";
// @ts-ignore
import HotelOwnerFormBasic from "../../components/hotelOwner/HotelOwnerFormBasic";

const HotelOwner = () => {
  return (
    <div className="flex flex-col justify-start items-center">
      <Header />
      <Outlet/>
    </div>
  );
};

export default HotelOwner;