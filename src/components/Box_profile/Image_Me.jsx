import Image_Me_Moradi from "./Image_Me/moradi.jpg"
export default function Image_Me(){
    return(
        <div className="  rounded-full border border-white w-[330px] h-[330px] ml-2 ">
            <img className="flex items-start bg-black w-80 h-80 rounded-full ml-1 mt-1 " src={Image_Me_Moradi} alt="" />
            </div>
    )
}