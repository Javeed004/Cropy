import React, { useState } from "react"; 
import Header from "./Header";
import CropCard from "./CropCard";
import { Link } from "react-router-dom";
import cropData from "../assets/cropData.json";

function CropsInfo() {

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredCrops = cropData.filter((crop) =>
    crop.commonName.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      {/* Header Section  */}
      <Header />

      {/* Crop Info Section */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="text-3xl text-green-500 font-semibold flex items-center">
          Crop Info <span className="ml-2 text-xl">→</span>
        </h2>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="border-b-2 border-gray-400 text-lg focus:outline-none focus:border-green-500 transition duration-200"
            value={searchTerm} 
            onChange={handleSearchChange} 
          />
        </form>
      </div>

      {/* Crop Cards Section */}
      <div className="grid grid-cols-5 gap-4 p-4 justify-items-center">
        {filteredCrops.map((crop, index) => (
          <CropCard key={index} crop={crop} />
        ))}
      </div>

      <div className="flex m-4 p-4 justify-center item-center text-center space-4">
        <Link
          to="/services/scr"
          className="w-40 bg-green-400 text-white text-xl font-bold py-2 rounded-lg hover:bg-green-500 transition m-2"
        >
          Back
        </Link>
      </div>
    </>
  );
}

export default CropsInfo;
