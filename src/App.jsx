import Equipments from "./Components/Equipments/Equipments";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Tab from "./Components/Tab/Tab";

import img1 from "..//src/assets/exercise-fitness-centre-personal-trainer-physical-fitness-general-fitness-training-dumbbell-713597957b42ef034237dde7c327a526.png";
import Testi from "./Components/Testi/Testi";
import Banner2 from "./Components/Banner2/Banner2";
import Footer from "./Components/Footer.jsx/Footer";

const BannerData = {
  Image: img1,
  Title: "The Importants to Take Care of Yourself",
  subtitle:
    "Lorem ipsum dolor sit amet, dolor sit amet, consectetur adipisicing elit. dolor sit amet, consectetur adipisicing elit. consectetur adipisicing elit. Odit commodi vero magnam nesciunt  dolor sit amet, consectetur adipisicing elit.dolor sit amet, consectetur adipisicing elit.libero enim excepturi harum, dolorem id cumque!",
  link: "#",
};



const App = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="">
        <Navbar />
        <Hero />
        <Equipments />
        <Banner {...BannerData} />
        <Tab />
        <Testi />
        <Banner2/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
