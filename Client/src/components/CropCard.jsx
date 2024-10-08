import React from "react";
import { useNavigate } from "react-router-dom";

const CropCard = ({ crop }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/crops-info/crop-info", { state: { crop } });
  };

  return (
    <div
      onClick={handleClick}
      className="bg-green-100 h-80 rounded-lg shadow-lg overflow-hidden w-[200px] m-4 transition-transform transform hover:scale-105 cursor-pointer"
    >
      <img src={crop.image} alt={crop.commonName} className="h-64 w-full object-cover" />
      <div className="bg-green-200 text-center py-4">
        <h3 className="text-2xl font-bold text-green-700">{crop.commonName.toUpperCase()}</h3>
        <div className="mt-2 border-t-2 border-green-500 w-1/3 mx-auto"></div>
      </div>
    </div>
  );
};

export default CropCard;
