import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  return (
    <div className="Main bg-black">
      <h2 className="font-extrabold text-center text-white p-5 text-6xl">This Is Number <span className="text-yellow-400" >{num}</span></h2>
      <div className="text-center ">
        <button
        className="px-8 py-4 bg-teal-500 border-0 text-2xl  m-2 text-white capitalize font-bold hover:bg-teal-400"
          onClick={function () {
            setNum(num + 1);
          }}
        >
          increment
        </button>
        <button
         className="px-8 bg-teal-500 py-4 text-2xl border-0 m-2 hover:bg-teal-400 text-white capitalize font-bold hover:bg-slate-400"
          onClick={function () {
            setNum(num - 1);
          }}
        >
          decrement
        </button>
      </div>
    </div>
  );
};

export default App;
