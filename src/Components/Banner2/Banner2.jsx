import { motion } from "motion/react";
import { FadeLeft} from "../../utility/animation";
const Banner2 = () => {
  return (
    <div className="container my-14">
        <div className="bg-[#f9f9f9] py-14 md:py-24 flex justify-center items-center">
            {/* brande info */}
            <div className="flex flex-col justify-center text-center space-y-8 lg:px-44">
                <motion.h1
                 variants={FadeLeft(0.6)}
                             initial="hidden"
                             animate="visible"
                className="text-3xl lg:text-5xl text-gray-700 font-semibold uppercase">Get 20% Discount on Your Firs Order, Are You Ready To Buy</motion.h1>
                <motion.p
                variats={FadeLeft(0.7)}
                initial="hidden"
                whileInView={"visible"}
                viewport={{once:true}}
                className="font-semibold text-gray-600">
                    We will make sure you get the right and the best qualitty products
                    for your workout
                </motion.p>
                <motion.div 
                variats={FadeLeft(0.9)}
                initial="hidden"
                whileInView={"visible"}
                viewport={{once:true}}
                className="flex gap-5 justify-center">
                    <button className=" bg-green-400 py-5 px-8  w-max rounded-xl font-semibold text-white font-montserrat">Learn More</button>
                    <button className=" border-2 py-5 px-8  border-green-400 w-max rounded-xl font-semibold text-gray-700 font-montserrat hover:bg-green-400 hover:text-white">Stay In Touch</button>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Banner2