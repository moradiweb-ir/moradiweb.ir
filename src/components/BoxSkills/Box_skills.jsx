import Image_Skills from "./Image_skills/skills-image.png";
export default function BoxSkills() {
  return (
    <div>
      <div className=" flex justify-center flex-nowrap mt-5">
        <div
          className=" flex flex-row-reverse flex-wrap justify-around items-center content-center  w-9/12 h-96
     bg-boxblue rounded-3xl  shadow shadow-transparent
      delay-50 hover:shadow-GRC transition-all delay-50 "
        >
          <div className="flex flex-row-reverse items-center justify-center w-[900px] h-[300px] border border-green-600 max-xl:flex-col max-md:w-[500px] ">
            <div className="flex flex-row items-center justify-center w-[500px] h-[150px] border border-green-600 max-md:w-[200px] ">
              <img className="flex  w-52 h-52 " src={Image_Skills} alt="" />
            </div>
            <div className="flex flex-row w-[500px] h-[200px] border border-green-500  justify-center items-center max-md:w-[300px]  ">
              <div className=" flex  flex-row  justify-center border border-green-400 ">
                <p className="flex  flex-row items-center justify-center rounded-2xl  w-64 h-12 bg-green-600 max-md:w-45 max-md:h-10">
                  Front-End Developer
                </p>
                {/* <div className=" flex flex-row justify-center items-center  "></div> */}
                {/* <div className="flex flex-row  justify-center  ">
                  <p className="flex flex-wrap  items-center justify-center rounded-2xl  w-12 h-12 bg-green-500 ml-2">
                    HTML
                  </p>
                  <p className="flex flex-wrap items-center justify-center rounded-2xl  w-12 h-12 bg-green-500 ml-2">
                    CSS
                  </p>
                  <p className="flex flex-wrap items-center justify-center rounded-2xl  w-32 h-12 bg-green-500 ml-2">
                    JAVASCRIPT
                  </p>
                  <p className="flex flex-wrap items-center justify-center rounded-2xl  w-32 h-12 bg-green-500 ml-2">
                    Tailwind
                  </p>
                  <p className="flex flex-wrap items-center justify-center rounded-2xl  w-16 h-12 bg-green-500 ml-2">
                    React.js
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
