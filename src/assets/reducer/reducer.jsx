import React from "react";

export default function reducer(state, action) {
  if (action.type === "SET_POKEMON") {
    const { name, sprites } = action.payload;
    return { name: name, sprite: sprites.front_default };
  }

  if (action.type === "CLOSE_POPUP") {
    return { ...state, popup: false };
  }

  if (action.type === "SHOW_POPUP") {
    return { ...state, popup: true };
  }
  throw new Error("error");
}
