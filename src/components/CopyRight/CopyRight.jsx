import React from "react";

function CopyRight() {
  return (
    <div className="flex flex-row justify-center mt-2   ">
      <div
        className="flex flex-row  items-center justify-around max-sm:flex-col max-lg:flex-col  max-xl:flex-col w-9/12 h-[50px]
bg-boxblue rounded-t-lg  shadow shadow-transparent
delay-50 hover:shadow-GRC transition-all delay-50 mb-0 max-md:w-11/12"
      >
        <p className="flex justify-center text-white font-semibold ">
          &copy; All Right Reserved For moradiweb.ir{" "}
        </p>
      </div>
    </div>
  );
}

export default CopyRight;
