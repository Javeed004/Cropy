import React from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
import cropData from "../assets/cropData.json";

function ScrResult() {
  const location = useLocation();
  const predictedCrop = location.state?.predictedCrop || "Unknown";

  // Find the crop details from cropData
  const selectedCrop = cropData.find(
    (crop) => crop.commonName.toLowerCase() === predictedCrop.toLowerCase()
  );

  return (
    <>
      {/* Header Section */}
      <Header />

      {/* Page Content */}
      <div>
        <div className="text-4xl font-bold text-green-500 text-center underline m-10">
          Recommended Crop
        </div>
        <div className="text-2xl text-green-500 text-center m-10">
          Based on your soil and environmental conditions, here’s the best crop
          to grow for optimal yield.
        </div>

        {/* Crop Information Form */}
        <div className="flex justify-center items-center text-center">
          <form className="flex flex-col justify-center items-center space-y-4">
            {/* Crop Name */}
            <label className="block text-xl font-medium">Crop Name</label>
            <input
              type="text"
              value={selectedCrop ? selectedCrop.commonName : "Unknown Crop"}
              readOnly
              className="w-full outline-none bg-transparent border border-zinc-500 px-3 h-10 rounded-full"
            />

            {/* Reason for Sustainability */}
            <label className="block text-xl font-medium">
              Reason for Sustainability
            </label>
            <textarea
              value={
                selectedCrop
                  ? selectedCrop.sustainabilityReason
                  : "No details available for this crop."
              }
              readOnly
              className="w-full outline-none bg-transparent overflow-ellipsis overflow-hidden border border-zinc-500 px-3 min-h-24 rounded-lg"
            ></textarea>

            {/* Action Buttons */}
            <div className="flex flex-col m-4 p-4 justify-center items-center text-center space-4">
              <div className="flex justify-center items-center space-x-4">
                <Link
                  to="/services/scr"
                  className="w-40 bg-green-400 text-white text-xl font-bold py-2 rounded-lg hover:bg-green-600 transition"
                >
                  Refine Inputs
                </Link>
                <Link
                  to="/crops-info"
                  className="w-40 bg-green-400 text-white text-xl font-bold py-2 rounded-lg hover:bg-green-600 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ScrResult;
