import Image_Skills from "./Image_skills/skills-image.png";
export default function BoxSkills() {
  return (
    <div>
      <div className=" flex justify-center flex-nowrap mt-5">
        <div
          className=" flex flex-row-reverse flex-wrap justify-around items-center content-center  w-9/12 h-96
     bg-boxblue rounded-3xl  shadow shadow-transparent
      delay-50 hover:shadow-GRC transition-all delay-50"
        >
          <div className="flex flex-wrap items-center  ">
            <img className="flex  w-52 h-52 m-10 " src={Image_Skills} alt="" />
          </div>
          <div className=" flex  flex-wrap items-center w-[600px] h-[350px] bg-transparent ">
            <div className=" flex justify-center w-full">
              <p className="flex  items-center justify-center rounded-2xl  w-64 h-12 bg-green-600">
                Front-End Developer
              </p>
            </div>
            <div className="flex flex-wrap w-[100%] justify-center mt-[-100px] ">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
