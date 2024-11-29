/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";

const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div
            className="text-xl font-semibold uppercase
          bg-green-500 text-white py-10 m-6 rounded-3xl"
          >
            <ul className="flex flex-col justify-center items-center gap-10 cursor-pointer">
              <li className=" hover:text-black ">Home</li>
              <li className=" hover:text-black ">About</li>
              <li className=" hover:text-black ">Services</li>
              <li className=" hover:text-black ">Contact</li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default ResponsiveMenu;
