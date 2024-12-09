import Image_Me from "./Image_Me/moradi.jpg";
export default function BoxProfile() {
  return (
    <div className="flex flex-row justify-center  mt-5">
      <div
        className="flex flex-row-reverse flex-wrap justify-around items-center content-center  w-9/12 h-96
     bg-boxblue rounded-3xl  shadow shadow-transparent
      delay-50 hover:shadow-GRC transition-all delay-50 max-xl:h-[650px] "
      >
        <div className="flex flex-row items-center justify-center w-[900px] h-[300x] border border-green-600 max-xl:flex-col max-md:w-[300px] max-xl:h-[650px]  ">
          <div className="flex justify-center items-center border border-green-400 w-[360px] h-[350px] max-lg:flex-col ">
            <img
              className="flex  w-[320px] h-[320px] rounded-full max-md:w-[270px] max-md:h-[270px]"
              src={Image_Me}
              alt=""
            />
          </div>
          <div className="flex flex-row border border-green-400 w-[500px] h-[350px] max-lg:flex-col max-lg:justify-center items-center max-lg:w-[300px]  max-md:justify-center   ">
            <div className="flex-row  w-80 h-56 mt-10 max-lg:justify-center items-center max-lg:w-[300px]  ">
              <p className="  text-white max-md:justify-center items-center">
                {" "}
                <b>Name : </b> Mohammad Hoseein Moradi
              </p>
              <p className="text-white mt-1 ">
                {" "}
                <b>Birthday : </b>1382 / 02 / 17
              </p>
              <p className="text-white  mt-1  max-md:justify-center items-center">
                {" "}
                <b>Age : </b>21 Years old
              </p>
              <br></br>
              <br></br>
              <p className="text-white  max-md:justify-center items-center ">
                {" "}
                <b>About : </b> I am Mohammad Hossein Moradi I’m Currently a{" "}
                <b className="text-green-500  max-md:justify-center items-center">
                  Computer software
                </b>{" "}
                Student My Field Of Work Is{" "}
                <b className="text-green-500  max-md:justify-center items-center">
                  Front-End
                </b>{" "}
                Programming
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
