import React from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
import bugPic from "../assets/Images/grove-1343739_1280.jpg";

function CropInfo() {
  const location = useLocation(); 
  const crop = location.state?.crop; 
  console.log("Crop data received:", crop);
  if (!crop) {
    return <h2>Crop not found!</h2>; 
  }


  return (
    <>
      {/* Header Section  */}
      <Header />

      {/* Hero Section */}
      <div
        className="relative flex h-screen bg-cover bg-center justify-center items-center mb-4"
        style={{ backgroundImage: `url(${crop.image})` }} // Use the crop image
      >
        <div className="absolute bottom-32 right-16 justify-center items-center text-center text-white text-5xl text-bold">
          {crop.commonName} ({crop.bioName}) {/* Display crop name */}
        </div>
      </div>

      {/* Ideal Growing Conditions Section */}
      <div className="text-3xl justify-start text-start font-bold ml-12">
        Ideal Growing Conditions
      </div>
      <div className="grid grid-cols-3 gap-12 mx-8 mb-12 p-4">
        <div className="p-8 bg-white rounded-lg shadow-lg text-black ">
          <div className="text-3xl font-semibold text-center mb-4">
            Temperature
          </div>
          <p className="text-lg text-primaryBold text-center">
            {crop.idealGrowingConditions.temperature}
          </p>
        </div>

        <div className="p-8 bg-white rounded-lg shadow-lg text-black ">
          <div className="text-3xl font-semibold text-center mb-4">
            Soil Type
          </div>
          <p className="text-lg text-primaryBold text-center">
            {crop.idealGrowingConditions.soilType}
          </p>
        </div>

        <div className="p-8 bg-white rounded-lg shadow-lg text-black ">
          <div className="text-3xl font-semibold text-center mb-4">
            Rainfall
          </div>
          <p className="text-lg text-primaryBold text-center">
            {crop.idealGrowingConditions.rainfall}
          </p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg mt-8 border-4 m-4">
        {/* Planting Time Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-green-600">
            🌱 Planting Time
          </h3>
          <p className="mt-4 text-gray-700">
            <span className="font-semibold">Sowing Season:</span>{" "}
            {crop.plantingTime.sowingSeason}
          </p>
          <p className="mt-2 text-gray-700">
            <span className="font-semibold">Harvesting Time:</span>{" "}
            {crop.plantingTime.harvestingTime}
          </p>
        </div>

        {/* Water Requirements Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-green-600">
            💧 Water Requirements
          </h3>
          <p className="mt-4 text-gray-700">{crop.waterRequirements}</p>
        </div>

        {/* Expected Yield Section */}
        <div>
          <h3 className="text-2xl font-bold text-green-600">
            🌾 Expected Yield
          </h3>
          <p className="mt-4 text-gray-700">{crop.expectedYield}</p>
        </div>
      </div>

      {/* Pest and Disease Control */}
      <div className="flex flex-row h-80 m-8 bg-white rounded-lg shadow-lg font-semibold">
        <div className="w-1/2 p-6">
          <img
            src={bugPic}
            alt="Farmers Pic"
            className="rounded-lg object-cover h-full w-full"
          />
        </div>
        <div className="w-1/2 p-6">
          <div className="text-3xl mb-4 font-bold">
            Pest and Disease Control
          </div>
          <div className="text-wrap text-xl">
            <div className="text-2xl">Common Pests:</div>
            {crop.pestControl.commonPests}
            <div className="text-2xl">Control Methods:</div>
            {crop.pestControl.controlMethods}
          </div>
        </div>
      </div>
      <div className="flex flex-col m-4 p-4 justify-center item-center text-center space-4">
        <div className="flex justify-center item-center">
          <Link
            to="/crops-info"
            className="w-40 bg-green-400 text-white text-xl font-bold py-2 rounded-lg hover:bg-green-600 transition m-2"
          >
            Back
          </Link>
        </div>
      </div>
    </>
  );
}

export default CropInfo;
