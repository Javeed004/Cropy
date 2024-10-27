import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Header from "./Header";

function SmartCropRec() {
  const [N, setN] = useState();
  const [phosphorus, setphosphorus] = useState();
  const [potassium, setpotassium] = useState();
  const [soilpH, setsoilpH] = useState();
  const [temperature, settemperature] = useState();
  const [humidity, sethumidity] = useState();
  const [rainfall, setrainfall] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:5173/services/scr",
        (N, phosphorus, potassium, soilpH, temperature, humidity, rainfall)
      )
      .then((result) => {
        console.log(result);
        navigate("/services/scr/scr-result");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {/* Header Section */}
      <Header />

      {/* Form Intro Section */}
      <div>
        <div className="text-4xl font-bold text-green-500 text-center underline m-10">
          Enter Your Farm Data
        </div>
        <div className="text-2xl text-green-500 text-center m-10">
          Provide the following details to receive personalized crop
          recommendations tailored to your soil and environmental conditions
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit}>
          <div className="justify-center items-center text-center">
            <div className="flex flex-col justify-center items-center space-y-3">
              {/* Input Fields */}
              <label className="block text-xl font-medium">Nitrogen</label>
              <input
                type="number"
                placeholder="Enter the Nitrogen level in mg/kg"
                className="w-1/4 outline-none bg-transparent border border-zinc-500 px-3 h-10 rounded-full"
                required
                onChange={(e) => setN(e.target.value)}
              ></input>

              <label className="block text-xl font-medium">Phosphorus</label>
              <input
                type="number"
                placeholder="Enter the Phosphorus level in mg/kg"
                className="w-1/4 outline-none bg-transparent border border-zinc-500 px-3 h-10 rounded-full"
                required
                onChange={(e) => setphosphorus(e.target.value)}
              ></input>

              <label className="block text-xl font-medium">Potassium</label>
              <input
                type="number"
                placeholder="Enter the Potassium level in mg/kg"
                className="w-1/4 outline-none bg-transparent border border-zinc-500 px-3 h-10 rounded-full"
                required
                onChange={(e) => setpotassium(e.target.value)}
              ></input>

              <label className="block text-xl font-medium">Soil pH</label>
              <input
                type="number"
                placeholder="Enter the soil pH level (Range: 0-14)"
                className="w-1/4 outline-none bg-transparent border border-zinc-500 px-3 h-10 rounded-full"
                required
                onChange={(e) => setsoilpH(e.target.value)}
              ></input>

              <label className="block text-xl font-medium">Temperature</label>
              <input
                type="number"
                placeholder="Enter the temperature (in °C)"
                className="w-1/4 outline-none bg-transparent border border-zinc-500 px-3 h-10 rounded-full"
                required
                onChange={(e) => settemperature(e.target.value)}
              ></input>

              <label className="block text-xl font-medium">Humidity</label>
              <input
                type="number"
                placeholder="Enter the humidity percentage (Range: 0-100%)"
                className="w-1/4 outline-none bg-transparent border border-zinc-500 px-3 h-10 rounded-full"
                required
                onChange={(e) => sethumidity(e.target.value)}
              ></input>

              <label className="block text-xl font-medium">Rainfall</label>
              <input
                type="number"
                placeholder="Enter the average rainfall in mm"
                className="w-1/4 outline-none bg-transparent border border-zinc-500 px-3 h-10 rounded-full"
                required
                onChange={(e) => setrainfall(e.target.value)}
              ></input>

              {/* Submit Button */}
              <div className="flex flex-col m-4 p-4 justify-center item-center text-center space-y-1">
                <div className="flex w-80 justify-center item-center">
                  <button
                    type="submit"
                    className="w-40 bg-green-500 text-white text-xl font-bold py-2 rounded-lg hover:bg-green-600 transition m-2"
                  >
                    Submit
                  </button>
                </div>

                {/* Usage Instruction */}
                <div className="flex w-80 justify-center item-center">
                  <Link
                    to="/services/scr/scr-result/process"
                    className="w-40 bg-green-500 text-white text-xl font-bold py-2 rounded-lg hover:bg-green-600 transition m-2"
                  >
                    Testing Manual
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SmartCropRec;
