import React from 'react'
import { Link } from 'react-router-dom';
import imageContact from "../assets/Images/pexels-akilmazumder-1072824.jpg";

function Footer() {
  return (
    <footer className="flex flex-row h-80 m-0 bg-primaryLight ">
        {/* Banner Image */}
        <div className="w-1/2 p-0">
          <img
            src={imageContact}
            alt="Farmer overview"
            className="object-cover h-full w-full"
          />
        </div>
        {/* Content */}
        <div className="w-1/2 p-6">
          <div className="text-3xl mb-4 font-bold">
            Join the Cropy Movement→
          </div>
          <div className="text-wrap text-xl">
            Be part of the future of smart farming. Whether you're a farmer,
            researcher, or partner, join us in revolutionizing agriculture with
            technology.
          </div>
          {/* Call-To-Action */}
          <nav className="mt-4 py-4 space-x-4">
            {/* <Link
              to="/sign-up"
              className="text-xl text-white bg-green-400 px-12 py-4 rounded-xl "
            >
              SIGN UP
            </Link> */}
            <Link
              to="/contact"
              className="text-xl text-gray bg-white px-12 py-4 rounded-xl border-2 border-black/50"
            >
              CONTACT
            </Link>
          </nav>
        </div>
      </footer>
  )
}

export default Footer