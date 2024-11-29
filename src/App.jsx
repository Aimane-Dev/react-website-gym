import Equipments from "./Components/Equipments/Equipments";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";

import img1 from "..//src/assets/exercise-fitness-centre-personal-trainer-physical-fitness-general-fitness-training-dumbbell-713597957b42ef034237dde7c327a526.png"
import img2 from "../src/assets/gym-2.png"

const BannerData = {
  Image: img1,
  Title: "The Importants to Take Care of Yourself",
  subtitle:
  "Lorem ipsum dolor sit amet, dolor sit amet, consectetur adipisicing elit. dolor sit amet, consectetur adipisicing elit. consectetur adipisicing elit. Odit commodi vero magnam nesciunt  dolor sit amet, consectetur adipisicing elit.dolor sit amet, consectetur adipisicing elit.libero enim excepturi harum, dolorem id cumque!",
  link: "#",
};

const BannerData2 = {
  Image: img2,
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
        <Banner {...BannerData2} />
      </div>
    </div>
  );
};

export default App;
