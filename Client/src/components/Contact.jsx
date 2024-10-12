import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import { AiOutlineMail } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdArrowDownward } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Contact() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5173/contact", (name, email, subject, message))
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
  };
  
  return (
    <>
      {/* Header Section */}
      <Header />

      {/* Get in Touch Section*/}
      <div className="text-center justify-center items-center relative h-72">
        <div className="text-4xl font-bold text-green-500 m-10">
          Get in Touch
        </div>
        <div className="text-2xl text-primaryBold m-10">
          Have questions or need assistance with Cropy? Reach out to us, and
          we'll be happy to help you make the most of your farming journey.
        </div>
        <div className="grid grid-cols-3 m-8 justify-center items-center text-center space-x-20 absolute right-20">
          <div className="font-sans flex flex-row text-center text-xl justify-center items-center space-x-3 ">
            <AiOutlineMail className="flex text-2xl text-zinc-500 justify-center items-center m-1" />
            <div className="font-sans">support@cropy.com</div>
          </div>
          <div className="font-sans flex flex-row text-center text-xl justify-center items-center space-x-3 ">
            <FaPhoneAlt className="flex text-2xl text-zinc-500 justify-center items-center m-1" />
            <div className="font-sans">+1 (800) 123-4567</div>
          </div>
          <div className="font-sans flex flex-row text-center text-xl justify-center items-center space-x-3 ">
            <FaLocationDot className="flex text-2xl text-zinc-500 justify-center items-center m-1" />
            <div className="font-sans">
              123 Farming Avenue, AgriTech City, Country
            </div>
          </div>
        </div>
      </div>

      {/* Send Us a Message Section*/}
      <div className="m-8">
        <h2 className="text-4xl font-bold text-center mb-6">
          Send Us a Message
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-xl font-medium">Name</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}

            />
          </div>
          <div className="space-y-2">
            <label className="block text-xl font-medium">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xl font-medium">Subject</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter subject"
              required
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xl font-medium">Message</label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              rows="4"
              placeholder="Type your message here..."
              required
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="justify-center items-center text-center">
            <button
              type="submit"
              className="w-32 bg-green-500 text-white font-bold py-2 rounded-lg hover:bg-green-600 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Find Us Section */}
      <div className="flex flex-col items-center mt-10">
        <h2 className="text-4xl font-bold mb-2">Find Us</h2>
        <p className="text-lg text-center mb-4">
          123 Farming Avenue, AgriTech City, Country
        </p>
        <MdArrowDownward className="h-6 w-6 text-green-500 mb-4" />
        <div className="w-3/5 p-6">
          <img
            src="https://img.freepik.com/premium-vector/3d-top-view-map-with-destination-location-point-aerial-clean-top-view-day-time-city-map-with-street-river-blank-urban-imagination-map-gps-map-navigator-concept_34645-1097.jpg"
            alt="Map"
            className="rounded-lg object-cover h-96 w-full" 
          />
        </div>
      </div>

      {/* Follow Us on Social Media Section */}
      <div className="flex flex-col items-center m-10">
        <h2 className="text-3xl font-bold mb-4">Follow Us on Social Media</h2>
        <div className="flex space-x-24">
          <div className="bg-gray-300 p-4 rounded-lg shadow-md">
            <FaFacebookF className="h-6 w-6 text-black" />
          </div>
          <div className="bg-gray-300 p-4 rounded-lg shadow-md">
            <FaTwitter className="h-6 w-6 text-black" />
          </div>
          <div className="bg-gray-300 p-4 rounded-lg shadow-md">
            <FaInstagram className="h-6 w-6 text-black" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
