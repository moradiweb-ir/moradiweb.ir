import Image_Skills from "./Image_skills/skills-image.png";
export default function BoxSkills() {
  return (
    <div>
      <div className=" flex justify-center flex-nowrap mt-5">
        <div
          className=" flex flex-row-reverse flex-wrap justify-around items-center content-center  w-9/12 h-96
     bg-boxblue rounded-3xl  shadow shadow-transparent
      delay-50 hover:shadow-GRC transition-all delay-50 max-md:w-11/12 max-xl:h-[600px]"
        >
          <div className="flex flex-row-reverse items-center justify-end w-[900px] h-[300px]  max-xl:flex-col max-md:w-[500px] max-xl:mt-[150px]">
            <div className="flex flex-row items-center justify-center w-[500px] h-[150px]  max-md:h-[160px] max-md:w-[180px] max-lg:h-[160px] max-lg:w-[180px] max-xl:h-[160px] max-xl:w-[180px] ">
              <img className="flex  w-52 h-52 " src={Image_Skills} alt="" />
            </div>
            <div className="flex flex-col w-[500px] h-[370px] border border-green-500  justify-center items-center max-md:w-[300px]  ">
              <div className=" flex  flex-col justify-center border border-green-400 ">
                <p className="flex  flex-col items-center justify-center rounded-2xl font-bold  w-64 h-12 bg-green-600 max-md:w-45 max-md:h-10 max-xl:mt-10">
                  Front-End Developer
                </p>
              </div>
              <div className="flex flex-row justify-around items-center w-[400px] h-[50px] border border-green-600 mt-5 max-md:w-[300px] ">
                <p className="flex flex-row justify-center items-center bg-green-600 w-24 h-12 rounded-full max-md:w-16 max-md:h-8 max-md:text-[14px] max-md:font-bold ">
                  HTML
                </p>
                <p className="flex flex-row justify-center items-center  bg-green-600 ml-[10px] w-24 h-12 rounded-full max-md:w-16 max-md:h-8 max-md:text-[14px] max-md:font-bold ">
                  CSS
                </p>
                <p className="flex flex-row  justify-center items-center bg-green-600 ml-[10px] w-24 h-12 rounded-full max-md:w-18 max-md:h-8 max-md:text-[14px] max-md:font-bold ">
                  JavaScript
                </p>
              </div>
              <div className="flex flex-row justify-around items-center w-[400px] h-[50px] border border-green-600 mt-5 max-md:w-[300px]">
                <p className="flex flex-row justify-center items-center bg-green-600 w-24 h-12 rounded-full max-md:w-18 max-md:h-8 max-md:text-[14px] max-md:font-bold  ">
                  React.js
                </p>
                <p className="flex flex-row justify-center items-center  bg-green-600 ml-[10px] w-28 h-12 rounded-full max-md:w-22 max-md:h-8 max-md:text-[14px] max-md:font-bold ">
                  React Router
                </p>
                <p className="flex flex-row  justify-center items-center bg-green-600 ml-[10px] w-28  h-12 rounded-full max-md:w-22  max-md:h-8 max-md:text-[14px] max-md:font-bold ">
                  Tailwind.css
                </p>
              </div>
              <div className="flex flex-row justify-around items-center w-[400px] h-[50px] border border-green-600 mt-5 max-md:w-[300px] ">
                <p className="flex flex-row justify-center items-center bg-green-600 w-28  h-12 rounded-full max-md:w-17    max-md:h-8 max-md:text-[14px] max-md:font-bold ">
                  Respansive
                </p>
                <p className="flex flex-row justify-center items-center  bg-green-600 ml-[10px] w-24 h-12 rounded-full max-md:w-18 max-md:h-8 max-md:text-[14px] max-md:font-bold ">
                  GridBox
                </p>
                <p className="flex flex-row  justify-center items-center bg-green-600 ml-[10px] w-24 h-12 rounded-full max-md:w-18 max-md:h-8 max-md:text-[14px] max-md:font-bold ">
                  FlexBox
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
