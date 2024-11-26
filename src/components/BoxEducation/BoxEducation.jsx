import Image_Education from "./Image_Education/Image_Education.png"
export default function BoxEducation(){
    return(
             <div className="flex flex-wrap justify-around  mt-5">
            <div className="flex  items-center max-md:flex-col justify-between w-9/12 h-96
     bg-boxblue rounded-3xl  shadow shadow-transparent
      delay-50 hover:shadow-GRC transition-all delay-50">
         <img className="flex  w-52 h-52 m-10 " src={Image_Education} alt="" />
     
            </div>
      </div>
       
    )
}