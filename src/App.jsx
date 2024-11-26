import "./App.css";
import BoxEducation from "./components/BoxEducation/BoxEducation";
import BoxProfile from "./components/BoxProfile/BoxProfile";
import BoxSkills from "./components/BoxSkills/Box_skills";
import Header from "./components/Header/Header";
import Menubar from "./components/Menubar/Menubar";


function App() {
  return (
    <>
      <Header />
      <Menubar />
      <BoxProfile />
      <BoxSkills />
      <BoxEducation/>
    </>
  );
}

export default App;
