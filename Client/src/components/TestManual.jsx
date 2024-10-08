import React from "react";
import Header from "./Header";

function TestManual() {
  return (
    <>
      {/* Header Section */}
      <Header />
      
      {/* Equipment Description and Requirements   */}
      <div className="bg-white p-8 rounded-lg shadow-lg mt-10">
        {/* Title */}
        <h2 className="text-4xl font-bold text-green-500 text-center underline mb-8">
          Testing Tools and Equipment
        </h2>

        {/* Introduction */}
        <p className="text-xl text-green-500 text-center mb-8">
          The following tools are required to analyze soil properties and ensure
          precise crop recommendations tailored to your farm’s unique
          conditions.
        </p>

        {/* Equipment Section */}
        <div className="grid grid-cols-3 gap-8">
          {/* Tool 1 */}
          <div className="bg-green-100 rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              Soil Tester
            </h3>
            <p className="text-lg text-green-600">
              Measures pH, moisture, and temperature for an in-depth soil
              analysis.
            </p>
          </div>

          {/* Tool 2 */}
          <div className="bg-green-100 rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              Nitrogen Analyzer
            </h3>
            <p className="text-lg text-green-600">
              Evaluates the nitrogen content to optimize soil fertility.
            </p>
          </div>

          {/* Tool 3 */}
          <div className="bg-green-100 rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              Phosphorus & Potassium Kit
            </h3>
            <p className="text-lg text-green-600">
              Provides accurate readings of phosphorus and potassium levels for
              balanced nutrition.
            </p>
          </div>

          {/* Tool 4 */}
          <div className="bg-green-100 rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              Temperature Probe
            </h3>
            <p className="text-lg text-green-600">
              Measures the temperature of the soil to ensure optimal planting
              conditions.
            </p>
          </div>

          {/* Tool 5 */}
          <div className="bg-green-100 rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              Rainfall Gauge
            </h3>
            <p className="text-lg text-green-600">
              Helps monitor local rainfall, vital for managing irrigation
              schedules.
            </p>
          </div>

          {/* Tool 6 */}
          <div className="bg-green-100 rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              Humidity Tester
            </h3>
            <p className="text-lg text-green-600">
              Measures the humidity levels in the surrounding environment, key
              for crop growth.
            </p>
          </div>
        </div>

        {/* Requirements Section */}
        <div className="mt-10">
          <h3 className="text-3xl font-bold text-green-500 mb-4">
            Equipment Requirements
          </h3>
          <ul className="list-disc text-lg text-green-600 pl-6">
            <li>Ensure the tools are calibrated before use.</li>
            <li>
              Follow the user manual for each tool to gather accurate readings.
            </li>
            <li>
              Test the soil at various points across the farm for better
              results.
            </li>
            <li>
              Use the tools at optimal times (e.g., after rain, before
              planting).
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default TestManual;
