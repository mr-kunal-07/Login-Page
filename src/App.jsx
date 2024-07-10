import React from "react";
import image from './assets/bg.avif'

const App = () => {
  return (
    <section className="min-h-screen flex items-center justify-center font-mono bg-gradient-to-r from-cyan-500 from-10% via-indigo-500 via-50% to-sky-500 to to-100%">

      <div className="flex shadow-2xl">
        <div className="flex flex-col items-center justify-center text-center p-20 gap-8 bg-white rounded-2xl *:
        xl:rounded-tr-none
        xl:rounded-br-none
        ">
          <h1 className="text-5xl font-bold ">WelCome</h1>


          <div className="flex flex-col text-left text-2xl gap-1">
            <span>UserName</span>
            <input type="text" className="rounded-md p-1 border-2 outline-none focus:border-cyan-400 focus:bg-gray-50" />
          </div>

          <div className="flex flex-col text-2xl text-left gap-1">
            <span>Password</span>
            <input type="text" className="rounded-md p-1 border-2 outline-none focus:border-cyan-400 focus:bg-gray-50" />

            <div className="flex gap-1 items-center ">
              <input type="checkbox" />
              <span className="text-base ">Remember Password</span>
            </div>

          </div>

          <button className="px-10 py-2 text-2xl rounded-md bg-gradient-to-tr from-green-400 to to-blue-500 hover:form-pink-500 hover:to-yellow-500 text-white ">Login</button>

          <p className="font-semibold">Don't have an account? <a href="#" className="text-blue-400 hover:underline">Register</a></p>

        </div>
        <img src={image} className="
        w-[450px] object-cover 
        xl:rounded-tr-2xl 
        xl:rounded-br-2xl 
        xl:block hidden" />
      </div>
    </section>
  );
};

export default App;
 