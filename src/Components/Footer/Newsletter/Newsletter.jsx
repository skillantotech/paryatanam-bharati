import React from "react";

function Newsletter() {
  return (
    <div className="Newsletter max-w-7xl mt-2 sm:flex sm:justify-between">
      <div className="Newsletter-intro">
        <h3 className=" font-semibold">Join our Newsletter</h3>
        <p className=" text-sm">
          Stay updated with latest travel news and offers
        </p>
      </div>
      <div className="Newsletter-form mt-3 sm:mt-0">
        <form action="" className=" flex gap-2 flex-wrap">
          <input
            type="email"
            placeholder="Enter your email"
            className=" p-2 h-8 w-[250px] max-[400px]:w-[100%] box-border border border-gray-800"
          />
          <button
            type="submit"
            value="Submit"
            className=" h-8 px-3 border max-[400px]:w-[100%] border-gray-800 transition-all duration-300 ease-linear hover:bg-slate-900 hover:text-white"
          >
            Submit
          </button>
        </form>
        <p className="text-sm mt-1">By subscribing you agree to our privacy policy</p>
      </div>
    </div>
  );
}

export default Newsletter;
