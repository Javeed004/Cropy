import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import bgImageHero from "../assets/Images/federico-respini-sYffw0LNr7s-unsplash.jpg";
import imageSCR from "../assets/Images/pexels-shvetsa-5231143.jpg";
import imageSHA from "../assets/Images/pexels-pixabay-144248.jpg";
import imageAbout from "../assets/Images/rice-field-7890204_1280.jpg";

function Services() {
  let navigate = useNavigate();

  const handleService = () => {
    navigate("/services/scr");
  };

  return (
    <>
      {/* Header Section */}
      <Header />

      {/* Hero section */}
      <div
        className="flex h-screen bg-cover bg-center justify-center items-center mt-0 "
        style={{ backgroundImage: `url(${bgImageHero})` }}
      >
        {/* Center Text */}
        <div className="absolute top-48 left-20 justify-start items-start text-white text-5xl text-bold">
          Our Services
        </div>

        <div className="absolute top-80 left-20 w-1/2 justify-start items-start text-white text-3xl text-bold">
          At Cropy, we offer a range of services designed to help farmers
          optimize their crop production. By combining real-time data and
          machine learning, we provide customized solutions for better crop
          management.
        </div>
      </div>

      {/* Smart Crop Recommendation Section */}
      <div className="flex flex-row h-80 m-8 bg-white rounded-lg shadow-lg font-semibold">
        <div className="w-1/2 p-6">
          <div className="text-3xl mb-4 font-bold">
            Smart Crop Recommendation
          </div>
          <div className="text-wrap text-xl">
            Get personalized crop suggestions based on your soil type, weather
            conditions, and other environmental factors. Cropy uses advanced
            machine learning models to recommend the best crops suited to your
            land, improving both yield and sustainability.
          </div>
          <div className="mt-4 py-4">
            <button
              onClick={handleService}
              to="/services/scr"
              className="text-xl text-gray bg-none px-12 py-4 rounded-xl border-2 border-gray"
            >
              Check it out
            </button>
          </div>
        </div>
        <div className="w-1/2 p-6">
          <img
            src={imageSCR}
            alt="Farmers Pic"
            className="rounded-lg object-cover h-full w-full"
          />
        </div>
      </div>

      {/* Soil Health Analysis */}
      <div className="flex flex-row h-80 m-8 bg-white rounded-lg shadow-lg font-semibold">
        <div className="w-1/2 p-6">
          <img
            src={imageSHA}
            alt="Farmers Pic"
            className="rounded-lg object-cover h-full w-full"
          />
        </div>
        <div className="w-1/2 p-6">
          <div className="text-3xl mb-4 font-bold">Soil Health Analysis</div>
          <div className="text-wrap text-xl">
            Analyze your soil’s nutrient composition with our integrated NPK
            sensor readings. Cropy helps you monitor essential soil nutrients
            like nitrogen, phosphorus, and potassium, ensuring optimal
            conditions for growth.
          </div>
          <div className="mt-4 py-4">
            <Link
              to="/services/sha"
              className="text-xl text-gray bg-none px-12 py-4 rounded-xl border-2 border-gray"
            >
              Analyse Now
            </Link>
          </div>
        </div>
      </div>

      {/* Rainfall Prediction */}
      <div className="text-3xl justify-start text-left px-8 font-bold">
        Rainfall Prediction
      </div>
      <div className="grid grid-cols-3 gap-4 m-8">
        <div className="p-6 bg-slate-300 rounded-lg ">
          <div className="text-2xl font-medium text-center mb-2">
            Real-Time Forecasts
          </div>
          <div className="text-lg text-center">
            Stay updated with accurate, real-time weather forecasts tailored to
            your region.
          </div>
        </div>
        <div className="p-6 bg-slate-200 rounded-lg ">
          <div className="text-2xl font-medium text-center mb-2">
            Rainfall Predictions
          </div>
          <div className="text-lg text-center">
            Plan your irrigation better with predictive insights on rainfall.
          </div>
        </div>
        <div className="p-6 bg-slate-100 rounded-lg ">
          <div className="text-2xl font-medium text-center mb-2">
            Check Forecast
          </div>
          <div className="text-lg text-center">
            Monitor temperature changes and adapt your farming practices
            accordingly.
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center items-center text-center mt-0 pb-6">
        <Link
          to="services//rp"
          className="text-xl text-gray bg-none px-12 py-4 rounded-xl border-2 border-gray"
        >
          Analyse Now
        </Link>
      </div>

      {/* Efficient Resource Management   */}
      <div className="flex flex-row h-96 w-full mt-6 mb-4 bg-green-200 font-semibold">
        <div className="w-1/2 p-6">
          <div className="text-4xl mb-4 font-bold">
            Efficient Resource Management
          </div>
          <div className="text-2xl">
            Manage your farm’s water and fertilizer usage efficiently with
            Cropy’s resource management tools. Optimize your input costs and
            maximize your output by making informed decisions.
          </div>
          <div className="flex w-full justify-start items-start text-start mt-0 py-2 px-0">
            <Link
              to="services//erm"
              className="text-xl text-white bg-green-400 my-4 px-12 py-4 rounded-xl "
            >
              Manage Resources
            </Link>
          </div>
        </div>
        <div className="w-1/2 p-6">
          <img
            src={imageAbout}
            alt="Field overview"
            className="rounded-lg object-cover h-full w-full"
          />
        </div>
      </div>

      {/* How Cropy Works */}
      <div className="text-center my-8">
        <div className="text-4xl font-bold mb-4">How Cropy Works</div>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          {/* Step 1: Input Data */}
          <div className="flex flex-col items-center bg-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-105">
            <div className="text-2xl font-semibold mb-2">Input Data</div>
            <p className="text-center mb-4">
              Farmers enter information such as soil type, location, and crop
              preferences.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="text-2xl">→</span>
          </div>
          {/* Step 2: Data Processing */}
          <div className="flex flex-col items-center bg-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-105">
            <div className="text-2xl font-semibold mb-2">Data Processing</div>
            <p className="text-center mb-4">
              Cropy analyzes the input data using machine learning models.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="text-2xl">→</span>
          </div>
          {/* Step 3: Recommendation */}
          <div className="flex flex-col items-center bg-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-105">
            <div className="text-2xl font-semibold mb-2">Recommendation</div>
            <p className="text-center mb-4">
              The system provides the most suitable recommendations.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="text-2xl">→</span>
          </div>
          {/* Step 4: Actionable Insights */}
          <div className="flex flex-col items-center bg-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-105">
            <div className="text-2xl font-semibold mb-2 ">
              Actionable Insights
            </div>
            <p className="text-center">
              Farmers receive insights and guidance on growing and resource
              management.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <Footer />
    </>
  );
}

export default Services;
