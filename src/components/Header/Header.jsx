export default function Header(){
    return(
        <div className="flex justify-center  " >
                 <div className=" flex flex-row justify-center w-9/12 h-20 bg-boxblue rounded-b-3xl shadow shadow-transparent delay-50 hover:shadow-GR transition-all delay-50 ">
                 <a className="flex  items-center flex-row basis-1/4 text-white font-bold text-sm " href="">Resume</a>
            <img className="  w-20 h-20 items-center  " src='' alt="" />
            <a className="flex justify-end items-center flex-row basis-1/4 text-white text-sm font-bold " href="">Project</a>
           </div>   
        </div>
       
    )
}