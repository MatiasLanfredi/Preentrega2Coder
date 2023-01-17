import React from "react";
//?Import Images
//import WomanImg from '../img/woman_hero.png';
//?Import Link
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-[800px] bg-hero bg-no-repeat bg-center py-24 bg-amber-600">
      <div className="container mx-auto flex justify-around h-full">
        {/*TEXT*/}
        <div className="flex flex-col justify-center">
          <div className="font-semibold  items-center uppercase">
            <div className="flex w-10 h-[2px] bg-red-500 mr-3 mb-10">
              New Trend
            </div>
          </div>
          {/*Title */}
          <h1 className=" text-[70px] leading-[1.1] font-light mb-4  ">
            AUTUMN SALE STYLISH <br />
            <span className="font-semibold">WOMENS</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 white border-white text-white"
          >
            Discover More
          </Link>
        </div>
        {/*IMAGE*/}
        {/* <div className="hidden lg:block">
          <img src={WomanImg} alt="/" />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
