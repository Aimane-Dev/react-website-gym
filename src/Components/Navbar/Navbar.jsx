import { FaDumbbell } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import React from "react";
import ResponsiveMenu from "../ResponsiveMenu";


// eslint-disable-next-line react-refresh/only-export-components
export const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },

  {
    id: 2,
    title: "Trainer",
    link: "/",
  },

  {
    id: 3,
    title: "Program",
    link: "/",
  },

  {
    id: 4,
    title: "Blog",
    link: "/",
  },

  {
    id: 5,
    title: "Pricing",
    link: "/",
  },
];

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-8 ">
          {/* logo */}
          <div className="text-3xl flex items-center gap-2 font-bold uppercase py-8">
            <FaDumbbell />
            <p>athlentic</p>
            <p className="text-green-500 ">Gym</p>
          </div>
          {/* menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-2 text-gray-600">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block py-1 px-3 hover:text-green-500 font-semibold"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/*icons  */}
          <div className="flex items-center gap-4">
            <button className="text-2xl hover:bg-green-500  hover:text-white rounded-full p-1 duration-200">
              <IoIosSearch />
            </button>

            <button className="text-2xl hover:bg-green-500  hover:text-white  rounded-full p-1 duration-200">
              <MdOutlineShoppingCart />
            </button>
            <button className="hover:bg-green-500  text-green-500  font-semibold hover:text-white  rounded-md  border-2 border-green-500 px-6 py-2  duration-200 hidden md:block">
              Login
            </button>
          </div>

          {/* hamburger */}
          <div className="md:hidden"   onClick={() => setOpen(!open)}>
            <IoMdMenu className="text-4xl cursor-pointer" />
          </div>
        </div>
      </nav>
      {/* Mobile Sidebar section */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
