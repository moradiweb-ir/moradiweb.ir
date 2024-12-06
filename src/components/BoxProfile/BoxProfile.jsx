import Image_Me from "./ImageMe";
import TextProfile from "./Textprofile";
export default function BoxProfile(){
return(
    <div className="flex flex-row  justify-center  mt-5">
            <div className="flex  items-center max-md:flex-col justify-around w-9/12 h-96
     bg-boxblue rounded-3xl  shadow shadow-transparent
      delay-50 hover:shadow-GRC transition-all delay-50">
       <Image_Me/>
       <TextProfile/>
    </div>
    </div>

)
}