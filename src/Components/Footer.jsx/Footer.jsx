import { FaDumbbell, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <div
      className="bg-gradient-to-r from-gray-900 to-gray-950
    rounded-t-3xl"
    >
      <div className="container">
        <div className="grid md:grid-cols-4 md:gap-4 py-5 border-t-r border-gray-300/10 text-white">
          {/* brand info section */}
          <div className="py-8 px-4 space-y-4">
            <div className="text-2xl flex items-center gap-2 font-semibold uppercase">
              <FaDumbbell className="text-green-400" />
              <p className="">athlentic</p>
              <p className="text-green-400">GYM</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              optio quaerat harum architecto minus, amet vel dicta nemo eligendi
              sequi!
            </p>
            <div className="flex gap-3 items-center justify-start ">
              <a href="#">
                <HiOutlineLocationMarker className="text-3xl" />
              </a>
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaGithub className="text-3xl" />
              </a>
            </div>
          </div>

          {/* footer links */}
          <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14">
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                Import Links
              </h1>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
              </ul>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                  Company Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="#">Our Services</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                  Resources
                </h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="#">Products</a>
                  </li>
                  <li>
                    <a href="#">Yoga</a>
                  </li>
                  <li>
                    <a href="#">Muscles</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      {/* copyright section */}
      <div className="mt-5">
        <div
          className="flex justify-center py-6 border-t-2 border-gray-300/10
      "
        >
          <span className="text-sm text-gray-300 opacity-70">
            @copyright 2024 Aimane Benazzouz
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
