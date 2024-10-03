import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function HomePage() {
  return (
    <>
      {/* Header section */}
      <Header />

      {/* Hero section */}
      <div className="flex h-svh bg-slate-400 justify-center items-center font-sans relative">
        <div className="absolute top-24 justify-center items-center text-primary text-4xl">
          Smart Farming, Better Tommorow
        </div>
        <Link
          to="/sign-up"
          className="absolute top-96 text-xl text-primaryBold bg-slate-100 px-12 py-4 rounded-xl"
        >
          Get Started
        </Link>
      </div>

      
      <div className="flex flex-col h-72 m-8 bg-white">

        {/* Overview */}
        <div className="space-y-5 ">
          <div className="text-3xl px-3 pt-4">Overview</div>
          <div className="text-wrap text-xl px-3 pt-2 w-1/2">
            Cropy is an innovative crop recommendation tool that helps farmers
            make informed decisions. Using soil data and environmental factors,
            Cropy provides personalized crop suggestions, ensuring optimal
            yields and sustainable farming practices.
          </div>
          <div className="px-3 py-1 ">
            <button
              to="/about"
              className="text-xl text-gray bg-none px-12 py-4 rounded-xl border-2 border-gray"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Key Features */}
        <div>
          
          
        </div>
      </div>
    </>
  );
}

export default HomePage;
