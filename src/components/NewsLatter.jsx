import React from "react";
import { assets } from "../assets/assets";
import Title from "./Title";

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center w-full px-4 sm:px-6 py-12 md:py-16">
      <div className="flex flex-col items-center max-w-5xl w-full rounded-2xl px-4 sm:px-6 md:px-10 py-12 md:py-16 bg-gray-900 text-white">
        <Title
          title="Stay Inspired"
          subTitle="Join our newsletter & be the first to discover new destinations, exclusive offers & travel inspiration."
        />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 w-full max-w-xl">
          <input
            type="text"
            className="bg-white/10 px-4 py-2.5 border border-white/20 rounded outline-none w-full"
            placeholder="Enter your email"
          />
          <button className="flex items-center justify-center gap-2 group bg-black px-4 md:px-7 py-2.5 rounded active:scale-95 transition-all w-full sm:w-auto whitespace-nowrap">
            Subscribe
            <img
              src={assets.arrowIcon}
              alt="arrow-icon"
              className="w-3.5 invert group-hover:translate-x-1 transition-all"
            />
          </button>
        </div>
        <p className="text-gray-500 mt-6 text-xs text-center max-w-md">
          By subscribing, you agree to our Privacy Policy and consent to receive
          updates.
        </p>
      </div>
    </div>
  );
};

export default NewsLetter;
