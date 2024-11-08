import Image_Me from "./image_Me";
import Text_profile from "./Text_profile";
export default function Box_Profile(){
return(
    <div className="flex flex-wrap  justify-around  mt-5">
            <div className="flex  items-center max-md:flex-col justify-around w-9/12 h-96
     bg-boxblue rounded-3xl  shadow shadow-transparent
      delay-50 hover:shadow-GRC transition-all delay-50">
       <Image_Me/>
       <Text_profile/>
    </div>
    </div>

)
}