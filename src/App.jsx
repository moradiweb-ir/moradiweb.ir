import "./App.css";
import BoxEducation from "./components/BoxEducation/BoxEducation";
import BoxExperience from "./components/BoxExperience/BoxExperience";
import BoxProfile from "./components/BoxProfile/BoxProfile";
import BoxSkills from "./components/BoxSkills/Box_skills";
import BoxContact from "./components/ContactBox/BoxContact";
import CopyRight from "./components/CopyRight/CopyRight";
import Header from "./components/Header/Header";
import Menubar from "./components/Menubar/Menubar";

function App() {
  return (
    <>
      <Header />
      <Menubar />
      <BoxProfile />
      <BoxSkills />
      <BoxEducation />
      <BoxExperience />
      <BoxContact />
      <CopyRight />
    </>
  );
}

export default App;
