import React from "react";
import BlackShoe from "../assets/BlackShoe.jpg";
import AirColor from "../assets/AirColor.png";
import AirGreen from "../assets/AirGreen.png";
import GreenShoe from "../assets/GreenShoe.jpg";
import SecondaryButton from "../components/SecondaryButton";
// import NikeGif from "../assets/NikeGif.jpg";
function Main() {
  return (
    <div className="my-40 flex flex-col">
      <section className="flex ">
        <a href="" className=" relative image-container">
          <img
            className="w-full h-full object-cover object-[100%,90%]"
            src={BlackShoe}
            alt="Blackshoe"
          />
          <div className="absolute flex flex-col gap-1 bottom-12 left-1/4 transform -translate-x-1/2 mb-5">
            <h2 className="text-white text-lg">Trending</h2>
            <h1 className="text-white text-2xl mb-2">
              Classic Black and White
            </h1>
            <span className="absolute top-24 -my-3 left-16 transform -translate-x-3/4">
              <SecondaryButton />
            </span>
          </div>
        </a>

        <a href="" className="relative image-container">
          <img
            className="w-full h-full object-cover object-[50%,100%]"
            src={GreenShoe}
            alt="GreenShoe"
          />
          <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2 mb-4">
            <h2>Trending</h2>
            <h1>Classic Black and White</h1>
            <SecondaryButton />
          </div>
        </a>
      </section>

      <section className="flex">
        <a href="" className="relative image-container">
          <img
            className="w-full h-full object-cover object-[50%,100%]"
            src={AirColor}
            alt="AirColor"
          />
          <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2 mb-4">
            <h2>Trending</h2>
            <h1>Classic Black and White</h1>
            <SecondaryButton />
          </div>
        </a>

        <a href="" className="relative image-container">
          <img
            className="w-full h-full object-cover object-[50%,80%]"
            src={AirGreen}
            alt="AirGreen"
          />
          <div className="absolute  bottom-0 left-1/4 transform -translate-x-1/2 mb-4">
            <h2>Trending</h2>
            <h1>Classic Black and White</h1>
            <SecondaryButton />
          </div>
        </a>
      </section>
    </div>
  );
}

export default Main;
