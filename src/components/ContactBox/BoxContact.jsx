import React from "react";
import Instagram from "./Image_Contact/instagram.png";
import Telegram from "./Image_Contact/telegram.png";
import Linkdin from "./Image_Contact/linkedin.png";
import clsx from "clsx";
function BoxContact() {
  return (
    <div className="flex flex-row justify-center mt-5">
      <div
        className="flex flex-row  items-center justify-around max-sm:flex-col max-lg:flex-col  max-xl:flex-col w-9/12 h-[150px]
bg-boxblue rounded-3xl  shadow shadow-transparent
delay-50 hover:shadow-GRC transition-all delay-50 mb-3"
      >
        <div className="flex flex-row justify-around items-center w-[500px] h-[90px] max-md:w-[280px] ">
          <img
            className={clsx(
              "flex flex-row h-[68px] w-[68px]",
              "max-md:w-[48px] max-md:h-[48px]"
            )}
            src={Instagram}
            alt=""
          />
          <img
            className={clsx(
              "flex flex-row h-[55px] w-[55px]",
              "max-md:w-[42px] max-md:h-[42px]"
            )}
            src={Telegram}
            alt=""
          />
          <img
            className={clsx(
              "flex flex-row h-[70px] w-[70px]",
              "max-md:w-[55px] max-md:h-[55px]"
            )}
            src={Linkdin}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-center w-[300px] h-[90px] min-md:w-[200px]  ">
          <p className={clsx("flex text-white font-bold", "min-md:text-xs ")}>
            Phone : 0910 - 221 - 6569
          </p>
          <p
            className={clsx(
              "flex text-white font-bold",
              "max-md:text-xs mt-3 "
            )}
          >
            Gmail : moradiweb.ir@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default BoxContact;
