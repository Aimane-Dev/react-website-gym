import HeroImg from "../../assets/cathe-friedrich-exercise-physical-fitness-fitness-centre-personal-trainer-dumbbell-0973995c1719de006a0099e3cbe64ecc.png"
import { FaPlay } from "react-icons/fa";

const Hero = () => {
 return (
   <>
     <section className="mb-10 bg-green-50 rounded-3xl ">
       <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[300px]  relative">
         {/* brand info */}
         <div className="flex flex-col justify-center py-14 md:py-0">
           <div className="text-center md:text-left space-y-6 ">
             <h1
          
               className="text-6xl lg:text-6xl-center font-bold
           leading-relaxed xl:leading-norma uppercase "
             >
               Gym Gives you the perfect{" "}
               <span className="text-green-500">Health</span>
             </h1>
             <p 
         
             className="text-2xl text-gray-700">
               It is a Long established fact that a reader will be by readable
               contenr of a page when are the best product !
             </p>
             {/* button section */}
             <div
               className="flex justify-center gap-8
             md:justify-start  !mt-4 items-center"
             >
               <button className="primary-btn">Order Now</button>
               <button className="flex justify-center gap-2 items-center font-semibold">
                <FaPlay /> Watch Now
               </button>
             </div>
           </div>
         </div>
         {/* hero image */}
         <div className="flex justify-center *:items-center">
           <img src={HeroImg} alt="" className=" mt-4 h-[580px] object-contain drop-shadow" />
         </div>
       </div>
     </section>
   </>
 );
};

export default Hero;