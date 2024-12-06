import React from "react";
import Instagram from "./Image_Contact/instagram.png";
import Telegram from "./Image_Contact/telegram.png";
import Linkdin from "./Image_Contact/linkedin.png";
function BoxContact() {
  return (
    <div className="flex flex-row justify-center mt-5">
      <div
        className="flex flex-row  items-center justify-around max-sm:flex-col max-lg:flex-col  max-xl:flex-col w-9/12 h-[150px]
bg-boxblue rounded-3xl  shadow shadow-transparent
delay-50 hover:shadow-GRC transition-all delay-50 mb-3"
      >
        <div className="flex flex-row justify-around items-center w-[500px] h-[90px] ">
          <img
            className="flex flex-row h-[68px] w-[68px] "
            src={Instagram}
            alt=""
          />
          <img
            className="flex flex-row h-[55px] w-[55px]"
            src={Telegram}
            alt=""
          />
          <img
            className="flex flex-row h-[70px] w-[70px]"
            src={Linkdin}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-center w-[500px] h-[90px] ">
          <p className="flex text-white font-bold">Phone : 0910 - 221 - 6569</p>
          <p className="flex text-white font-bold">
            Gmail : moradiweb.ir@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default BoxContact;
