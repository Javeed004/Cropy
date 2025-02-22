import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import WelcomeLogIn from "./Welcome";

function SignUpPage() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:5173/sign-up",
        (name, email, password)
      )
      .then((result) => {
        console.log(result);
        console.log("Successfully signed up");
        navigate("/sign-in");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-white h-screen justify-around flex flex-row">
      {/* Left Side */}
      <WelcomeLogIn />
      {/* Right Side */}
      <div className="text-center flex flex-col h-screen justify-center items-center space-y-5">
        <div className="text-3xl text-center  ont-sans font-bold">
          <p>Sign Up</p>
        </div>
        <div className="flex flex-row space-x-9">
          <FaGoogle className="text-zinc-500 outline outline-zinc-500 rounded-full outline-offset-4" />
          <FaFacebook className="text-zinc-500 outline outline-zinc-500 rounded-full outline-offset-4" />
          <FaLinkedinIn className="text-zinc-500 outline outline-zinc-500 rounded-full outline-offset-4" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-5 ">
            <input
              type="text"
              placeholder="Name"
              className="outline-none bg-transparent border border-zinc-500 px-5 h-10 rounded-full "
              required
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              type="email"
              placeholder="Email"
              className="outline-none bg-transparent border border-zinc-500 px-5 h-10 rounded-full "
              required
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              type="password"
              placeholder="Password"
              className="outline-none bg-transparent border border-zinc-500 px-5 h-10 rounded-full "
              required
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <Link to={"/sign-up/sign-in"} className="text-blue-600 text-sm underline m-1">
            <p>Already have an account</p>
          </Link>
          <div>
            <button
              type="submit"
              className="font-bold text-white bg-green-400 px-10 py-2 rounded-full m-0"
            >
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
