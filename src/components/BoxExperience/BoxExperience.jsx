import React from "react";
import Image_Experience from "./Image_Experience/experience.png";
function BoxExperience() {
  return (
    <>
      <div className="flex flex-row-reverse justify-center mt-5">
        <div
          className="flex flex-row-reverse items-center justify-around max-sm:flex-col max-lg:flex-col  max-xl:flex-col w-9/12 h-96
bg-boxblue rounded-3xl  shadow shadow-transparent
delay-50 hover:shadow-GRC transition-all delay-50 max-md:w-11/12"
        >
          <img
            className="flex flex-row w-52 h-52 m-10 max-md:h-[170px] max-md:w-[170px] "
            src={Image_Experience}
            alt=""
          />
          <div className=" flex flex-row items-center justify-center w-[600px] h-[120px] max-md:flex-col max-md:w-[300px] border border-emerald-500 "></div>
        </div>
      </div>
    </>
  );
}

export default BoxExperience;
