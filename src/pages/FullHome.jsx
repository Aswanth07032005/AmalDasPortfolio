import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Service from "./Service";
import Skill from "./Skill";

function FullHome({ skillItems }) {
    return(
        <>
        <Home/>
        <About/>
        <Skill skillItems={skillItems}/>
        <Service/>
        <Contact/>
        </>

    )
}
export default FullHome;
