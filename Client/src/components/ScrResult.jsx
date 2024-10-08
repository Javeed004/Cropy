import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import cropData from "../assets/cropData.json"; // Import your JSON data

function ScrResult() {
  const [cropRecommendation, setCropRecommendation] = useState("");
  const [selectedCrop, setSelectedCrop] = useState(null);

  // Fetch crop recommendation from the backend on component mount
  useEffect(() => {
    const fetchRecommendation = async () => {
      try {
        const response = await axios.get(
          "http://your-backend-api/recommend-crop"
        );
        
        const cropName = response.data.cropName;
        setCropRecommendation(cropName);

        const cropInfo = cropData.find(
          (crop) => crop.commonName.toLowerCase() === cropName.toLowerCase()
        );
        setSelectedCrop(cropInfo); // Store the crop information
      } catch (error) {
        console.error("Error fetching crop recommendation:", error);
      }
    };

    fetchRecommendation();
  }, []);

  return (
    <>
      {/* Header Section */}
      <Header />

      {/* Form Intro Section */}
      <div>
        <div className="text-4xl font-bold text-green-500 text-center underline m-10">
          Recommended Crop
        </div>
        <div className="text-2xl text-green-500 text-center m-10">
          Based on your soil and environmental conditions, this is the best crop
          to grow for optimal yield.
        </div>

        <div className="flex justify-center item-center text-center">
          <form className="flex flex-col justify-center item-center space-y-4">
            <label className="block text-xl font-medium">Crop Name</label>
            <input
              type="text"
              value={cropRecommendation} // Display the recommended crop name
              readOnly
              className="w-full outline-none bg-transparent border border-zinc-500 px-3 h-10 rounded-full"
            />

            <label className="block text-xl font-medium">
              Reason for Sustainability
            </label>
            <textarea
              value={selectedCrop ? selectedCrop.reason : "Loading..."}
              readOnly
              className="w-full outline-none bg-transparent overflow-ellipsis overflow-hidden border border-zinc-500 px-3 min-h-52 rounded-lg"
            ></textarea>

            <div className="flex flex-col m-4 p-4 justify-center item-center text-center space-4">
              <div className="flex justify-center item-center">
                <Link
                  to="/services/scr"
                  className="w-40 bg-green-400 text-white text-xl font-bold py-2 rounded-lg hover:bg-green-600 transition m-2"
                >
                  Refine Inputs
                </Link>

                <Link
                  to="/crops-info"
                  className="w-40 bg-green-400 text-white text-xl font-bold py-2 rounded-lg hover:bg-green-600 transition m-2"
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
