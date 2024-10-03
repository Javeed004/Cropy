import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import WelcomeLogIn from "./Welcome";

function SignInPage() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5173/sign-in", (name, email, password))
      .then((result) => {
        console.log(result);
        navigate("/home-page");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-white h-screen justify-around flex flex-row">
      {/* Left Side */}
      <WelcomeLogIn />
      {/* Right Side */}
      <div className="text-center flex flex-col h-screen justify-center items-center space-y-5">
        <div className="text-3xl text-center font-sans font-bold">
          <p>Sign In</p>
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
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              type="email"
              placeholder="Email"
              className="outline-none bg-transparent border border-zinc-500 px-5 h-10 rounded-full "
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              type="password"
              placeholder="Password"
              className="outline-none bg-transparent border border-zinc-500 px-5 h-10 rounded-full "
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
        </form>
        <div className="text-blue-600 text-sm underline">
          <Link to={"/change-password"}>Forget Password</Link>
        </div>
        <div>
          <Link
            to="/"
            className="font-bold text-white bg-green-400 px-10 py-2 rounded-full"
          >
            SIGN IN
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
