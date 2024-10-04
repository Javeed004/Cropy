import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import imageAbout from "../assets/Images/rice-field-7890204_1280.jpg";
import imageValue from "../assets/Images/henry-perks-aOTBPSDjgj0-unsplash.jpg";

function About() {
  return (
    <>
      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <div className="flex relative bg-white h-screen w-full justify-center items-center text-center">
        <div className="font-sans text-5xl text-primaryBold absolute top-80 justify-center items-center ">
          About Us
        </div>
      </div>

      {/* About Cropy Section   */}
      <div className="flex flex-row h-96 w-full mt-8 mb-4 bg-green-200 font-semibold">
        <div className="w-1/2 p-6">
          <div className="text-4xl mb-4 font-bold">About Cropy</div>
          <div className="text-2xl">
            Cropy is an intelligent platform that provides personalized crop
            recommendations based on soil and environmental data. With Cropy,
            farming becomes smarter and more sustainable, helping farmers make
            better decisions to enhance their yield and resource management.
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

      {/* Mission Section   */}
      <div className="flex flex-col font-sans justify-center items-center text-center space-y-4 mt-6 mb-6 p-3 bg-primary/50">
        <div className="text-4xl m-2 font-bold">Our Mission</div>
        <div className="text-2xl pb-4">
          Cropy's mission is to empower farmers with data-driven insights to
          grow more efficiently. We aim to revolutionize agriculture by
          providing smart, accessible technology for small and large-scale
          farming.
        </div>
      </div>

      {/* Why We Built Cropy Section */}
      <div className="text-3xl justify-start text-left px-8 font-bold">
        Why We Built Cropy
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-8">
        {/* Card 1 */}
        <div className="p-6 bg-white rounded-lg shadow-lg hover:bg-green-200 hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="text-2xl font-medium text-center mb-2 text-black hover:text-white">
            Addressing Climate Uncertainty
          </div>
          <div className="text-lg text-primary text-center hover:text-white">
            Cropy helps farmers mitigate unpredictable weather risks with smart
            recommendations.
          </div>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-white rounded-lg shadow-lg hover:bg-green-200 hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="text-2xl font-medium text-center mb-2 text-black hover:text-white">
            Analyze Environment
          </div>
          <div className="text-lg text-primary text-center hover:text-white">
            Efficient use of water, fertilizers, and land for more sustainable
            farming.
          </div>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-white rounded-lg shadow-lg hover:bg-green-200 hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="text-2xl font-medium text-center mb-2 text-black hover:text-white">
            Boosting Yields
          </div>
          <div className="text-lg text-primary text-center hover:text-white">
            Tailored crop suggestions lead to improved crop yield and income for
            farmers.
          </div>
        </div>
      </div>

      {/* Value Section */}
      <div
        className="bg-cover w-full h-80 p-4 mb-4 flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${imageValue})` }}
      >
        <div className="text-4xl text-primaryBold font-bold mb-6 text-center">
          OUR VALUE
        </div>
        <div className="grid grid-cols-2 text-2xl w-full max-w-screen-lg text-center font-semibold justify-center items-center gap-8">
          <div className="p-4 bg-gray-400/50 rounded-lg">Innovation</div>
          <div className="p-4 bg-gray-400/50 rounded-lg">Collaboration</div>
          <div className="p-4 bg-gray-400/50 rounded-lg">Sustainability</div>
          <div className="p-4 bg-gray-400/50 rounded-lg">Empowerment</div>
        </div>
      </div>

      {/* Contact Section */}
      <Footer />
    </>
  );
}

export default About;
