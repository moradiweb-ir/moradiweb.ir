import Image_Education from "./Image_Education/Image_Education.png";
export default function BoxEducation() {
  return (
    <div className="flex flex-row justify-center mt-5">
      <div
        className="flex flex-row items-center justify-around max-sm:flex-col max-lg:flex-col  max-xl:flex-col w-9/12 h-96
     bg-boxblue rounded-3xl  shadow shadow-transparent
      delay-50 hover:shadow-GRC transition-all delay-50 max-md:w-11/12 max-md:h-[500px]"
      >
        <img
          className="flex flex-row w-52 h-52 m-10 max-md:h-[170px] max-md:w-[170px] max-lg:h-[170px] max-lg:w-[170px] max-xl:h-[170px] max-xl:w-[170px] "
          src={Image_Education}
          alt=""
        />
        <div className=" flex flex-row items-center justify-center w-[600px] h-[120px] max-md:flex-col max-md:w-[300px] ">
          <div className="flex flex-col items-center justify-center w-[350px] h-[120px] ">
            <span className="flex flex-col justify-center items-center w-[180px] h-[50px] max-md:mt-[-70px] font-bold bg-green-500 rounded-3xl  ">
              Master's degree
            </span>
            <p className="flex flex-col mt-2 color text-white font-bold max-md:text-sm ">
              Shahid Rajaei Lahijan University
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-[350px] h-[120px]">
            <span className="flex flex-col  justify-center items-center w-[180px] h-[50px] max-md:text-sm font-bold bg-green-500 rounded-3xl">
              Bachelor's degree
            </span>
            <p className="flex flex-col mt-2 color text-white font-bold max-md:text-sm max-md:flex-col">
              Data Processing University
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
