import {React, useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function PasswordChange() {
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:5173/change-password",
        (email, password, confirmPassword)
      )
      .then((result) => {
        console.log(result);
        navigate("/sign-in");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-white text-center flex flex-col h-screen justify-center items-center space-y-7">
      <div className="font-sans font-bold text-3xl text-center">
        <p>Change Password</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col font-sans space-y-2">
          <label className="font-sans font-semibold ">Enter your Email</label>
          <input
            type="email"
            placeholder="Email"
            className="outline-none bg-transparent border border-zinc-400 h-10 px-5 rounded-full"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label className="font-sans font-semibold ">
            Enter your New Password
          </label>
          <input
            type="password"
            placeholder="New Password"
            className="outline-none bg-transparent border border-zinc-400 h-10 px-5 rounded-full"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <label className="font-sans font-semibold ">
            Confirm your Password
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="outline-none bg-transparent border border-zinc-400 h-10 px-5 rounded-full"
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>
      </form>
      <div className="">
        <Link
          to={"/sign-in"}
          className="text-white font-sans font-bold bg-green-400 rounded-full px-8 py-2 my-5"
        >
          CONFIRM
        </Link>
      </div>
    </div>
  );
}

export default PasswordChange;
