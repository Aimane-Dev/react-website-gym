import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";

const Equip = [
  {
    id: 1,
    title: "Yoga Equipments",
    description: "It is a long established fact that a reader readable",
    icon: <GrYoga />,
    delay: 0.9,
  },
  {
    id: 2,
    title: "Muscles Equipments",
    description: "It is a long established fact that a reader readable ",
    icon: <FaDumbbell />,
    delay: 0.9,
  },
  {
    id: 3,
    title: "Fitness Equipments",
    description: "It is a long established fact that a reader readable",
    icon: <GiGymBag />,
    delay: 0.9,
  },
];

const Equipments = () => {
  return (
    <div>
      <div className="container">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4
         gap-6 font-montserrat"
        >
          <div className="space-y-4 p-6">
            <h1 className="text-3xl md:text-4xl font-bold">
              Whate we offer for you
            </h1>
            <p className="text-gray-500 ">
              it is a long established fact that a reader readable
            </p>
          </div>
          {Equip.map((item) => {
            return (
              <div
                key={item.id}
                className="space-y-4 p-6 bg-[#fbfbfb]
                 hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgb(0,0,0,0.15)] 
                 cursor-pointer "
              >
                <div className="text-4xl font-semibold">{item.icon}</div>
                <p className="text-2xl font-semibold">{item.title}</p>
                <p className="text-gray-500">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Equipments;
