import React from "react";
import Home from "../Pages/Home";

const DeliverySuccess = ({dCost}) => {
  return (
    <div className="container">
      <div className="app-wrapper">
        <Home />
        <h1 className="form-success">{dCost}</h1>
      </div>
    </div>
  );
};

export default DeliverySuccess;
