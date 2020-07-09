import React from "react";
import "../App.css";

export const SwapRateContainer = ({ btnClickHandler }) => {
  return (
    <div className="swap-rate-container">
      <button className="btn" id="swap" onClick={btnClickHandler}>
        Swap
      </button>
      <div className="rate" id="rate"></div>
    </div>
  );
};
