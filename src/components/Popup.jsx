import React from "react";
import { useState } from "react";
import { useProductsContext } from "../context/context";

export default function Popup() {
  const { name, sprite, Popup } = useProductsContext();
  return (
    <div className="absolute z-10 flex items-center justify-center h-screen">
      <div className="fixed inset-0 flex items-center justify-center bg-opacity-75 bg-[#D3D3D3]">
        <div className="p-8 bg-[#D3D3D3] rounded-lg shadow-lg border border-[#4361ee] ">
          <p className="text-center text-[#494F55] font-semibold ">
            Welcome Visitor
          </p>
          <br />
          <p className="text-center text-[#494F55] text-ellipsis font-semibold">
            You Caught
          </p>
          <img src={sprite} alt="" className="items-center m-0 align-middle" />
          <p className="text-center text-[#494F55] font-semibold"> A {name}!</p>
        </div>
      </div>
    </div>
  );
}
