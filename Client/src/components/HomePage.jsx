import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import bgImageHero from "../assets/Images/dan-meyers-IQVFVH0ajag-unsplash.jpg";
import imageOverview from "../assets/Images/pexels-jakeheinemann-1482101.jpg";
import Footer from "./Footer";

function HomePage() {
  return (
    <>
      {/* Header section */}
      <Header />

      {/* Hero section */}
      <div
        className="flex h-screen bg-cover bg-center justify-center items-center"
        style={{ backgroundImage: `url(${bgImageHero})` }}
      >
        {/* Center Text */}
        <div className="absolute top-64 justify-center items-center text-primaryBold text-5xl text-bold">
          Smart Farming, Better Tomorrow
        </div>

        {/* Bottom Center button */}
        <Link
          to="/sign-up"
          className="absolute top-full text-xl text-primaryBold bg-slate-100 px-12 py-4 rounded-xl"
        >
          Get Started
        </Link>
      </div>

      {/* Overview section */}
      <div className="flex flex-row h-80 m-8 bg-white rounded-lg shadow-lg font-semibold">
        <div className="w-1/2 p-6">
          <div className="text-3xl mb-4 font-bold">Overview</div>
          <div className="text-wrap text-xl">
            Cropy is an innovative crop recommendation tool that helps farmers
            make informed decisions. Using soil data and environmental factors,
            Cropy provides personalized crop suggestions, ensuring optimal
            yields and sustainable farming practices.
          </div>
          <div className="mt-4 py-4">
            <Link
              to="/about"
              className="text-xl text-gray bg-none px-12 py-4 rounded-xl border-2 border-gray"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="w-1/2 p-6">
          <img
            src={imageOverview}
            alt="Farmer overview"
            className="rounded-lg object-cover h-full w-full"
          />
        </div>
      </div>

      {/* Key Features Section */}
      <div className="text-3xl justify-center  text-center font-bold">
        Key Features
      </div>
      <div className="grid grid-cols-3 gap-8 m-8">
        <div className="p-6 bg-green-100 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
          <div className="text-2xl font-medium text-center mb-2">
            Soil Analysis
          </div>
          <div className="text-lg text-center">
            Input essential soil data such as nitrogen, phosphorus, potassium,
            and pH levels for detailed analysis.
          </div>
        </div>

        <div className="p-6 bg-green-200 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
          <div className="text-2xl font-medium text-center mb-2">
            Resource Optimization
          </div>
          <div className="text-lg text-center">
            Maximize yield while efficiently using water, fertilizers, and land
            resources with personalized suggestions.
          </div>
        </div>

        <div className="p-6 bg-green-300 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
          <div className="text-2xl font-medium text-center mb-2">
            Real-Time Recommendations
          </div>
          <div className="text-lg text-center">
            Receive crop suggestions based on current environmental conditions
            and soil parameters.
          </div>
        </div>
      </div>

      {/* How Cropy Works */}
      <div className="text-3xl justify-start text-left px-8 underline font-bold">
        How Cropy Works
      </div>
      <div className="grid grid-cols-3 gap-4 m-8">
        <div className="p-6 bg-slate-300 rounded-lg shadow-lg">
          <div className="text-2xl font-medium text-center mb-2">
            Input Soil Data
          </div>
          <div className="text-lg text-center">
            Enter soil parameters like nitrogen, phosphorus, potassium, and
            moisture.
          </div>
        </div>

        <div className="p-6 bg-slate-200 rounded-lg shadow-lg">
          <div className="text-2xl font-medium text-center mb-2">
            Analyze Environment
          </div>
          <div className="text-lg text-center">
            Cropy processes the data and assesses environmental factors for
            accurate analysis.
          </div>
        </div>

        <div className="p-6 bg-slate-100 rounded-lg shadow-lg">
          <div className="text-2xl font-medium text-center mb-2">
            Receive Recommendations
          </div>
          <div className="text-lg text-center">
            Get personalized crop recommendations tailored to your soil
            conditions.
          </div>
        </div>
      </div>

      {/* Why Choose Cropy Section */}
      <div className="text-3xl justify-center text-center font-bold py-8">
        Why Choose Cropy?
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-8 mb-12">
        <div className="p-8 bg-green-400/90  rounded-lg shadow-lg text-white hover:scale-105 transform transition duration-300 ease-in-out">
          <div className="text-3xl font-semibold text-center mb-4">
            Personalized Recommendations
          </div>
          <p className="text-lg text-center">
            Tailored suggestions based on real-time soil and environmental data
            for maximizing yields.
          </p>
        </div>

        <div className="p-8 bg-green-400/90  rounded-lg shadow-lg text-white hover:scale-105 transform transition duration-300 ease-in-out">
          <div className="text-3xl font-semibold text-center mb-4">
            Easy to Use
          </div>
          <p className="text-lg text-center">
            An intuitive interface designed for farmers to input data
            effortlessly and get actionable results.
          </p>
        </div>

        <div className="p-8 bg-green-400/90  rounded-lg shadow-lg text-white hover:scale-105 transform transition duration-300 ease-in-out">
          <div className="text-3xl font-semibold text-center mb-4">
            Sustainable Farming
          </div>
          <p className="text-lg text-center">
            Focuses on eco-friendly practices to ensure long-term soil health
            and productivity.
          </p>
        </div>

        <div className="p-8 bg-green-400/90   rounded-lg shadow-lg text-white hover:scale-105 transform transition duration-300 ease-in-out">
          <div className="text-3xl font-semibold text-center mb-4">
            Data-Driven Precision
          </div>
          <p className="text-lg text-center">
            Leverages data analytics and machine learning to provide highly
            accurate recommendations.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <Footer/>
    </>
  );
}

export default HomePage;
