import React from "react";
import { useState } from "react";
import { useProductsContext } from "../context/context";

export default function Popup() {
  const { name, sprite, Popup } = useProductsContext();
  return (
    <div className="absolute flex items-center justify-center h-screen">
      <div className="fixed inset-0 flex items-center justify-center bg-opacity-75 bg-[#0a192f]">
        <div className="p-8 bg-[#0a192f] rounded-lg shadow-lg border border-[#33d6a4] ">
          <p className="text-center text-[#ccd6f6] font-semibold ">
            Welcome Visitor
          </p>
          <br />
          <p className="text-center text-[#ccd6f6] text-ellipsis font-semibold">
            You Caught
          </p>
          <img src={sprite} alt="" className="items-center m-0 align-middle" />
          <p className="text-center text-[#ccd6f6] font-semibold"> A {name}!</p>
        </div>
      </div>
    </div>
  );
}
