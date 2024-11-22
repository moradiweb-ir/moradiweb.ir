import Image_Me_Moradi from "./Image_Me/moradi.jpg"
export default function Image_Me(){
    return(
        <div className="flex justify-around rounded-full border border-green-600 w-[330px] h-[330px]  ">
            <img className="flex items-start justify-around  bg-black w-80 h-80 rounded-full  mt-1 " src={Image_Me_Moradi} alt="" />
            </div>
    )
}