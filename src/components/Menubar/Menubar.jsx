export default function Menubar() {
  return (
    <div className="flex justify-center mt-3">
      <ul className=" flex flex-row justify-around items-center w-9/12 h-20 bg-boxblue rounded-full  shadow shadow-transparent delay-50 hover:shadow-GRC transition-all delay-50 max-md:w-11/12">
        <li className="flex  items-center flex-row  text-white font-bold text-xs">
          <a href="">Skills</a>
        </li>
        <li className="flex  items-center flex-row  text-white font-bold text-xs">
          <a href="">Eduction</a>
        </li>
        <li className="flex  items-center flex-row  text-white font-bold text-xs">
          <a href="">Exprience</a>
        </li>
        <li className="flex  items-center flex-row  text-white font-bold text-xs">
          <a href="">Contant</a>
        </li>
      </ul>
    </div>
  );
}
