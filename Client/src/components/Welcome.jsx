import React from "react";

function Welcome() {
  return (
    <div className="flex flex-col space-y-5 justify-center  items-center h-screen">
      <div>
        <p className="text-3xl text-center font-sans font-bold">Welcome!</p>
      </div>
      <div>
        <p className="text-slate-400 text-center">
          Unlock smart farming insights.
          <br /> Hop on to discover the best crops for your soil and boost your
          yield with Cropy's precision recommendations.
        </p>
      </div>
    </div>
  );
}

export default Welcome;
