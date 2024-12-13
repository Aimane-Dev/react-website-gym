import { ProductsData } from "../mockData/data";
import { useState } from "react";
import { motion } from "motion/react";
const Tab = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Yoga", "Fitness", "Muscles"];

  const filteredCards =
    activeTab === "All"
      ? ProductsData
      : ProductsData.filter((card) => card.category === activeTab);

  return (
    <>
      <div className="container my-12 md:my-16">
        {/* tabs button section */}
        <div className="continer my-12 md:mt-16">
          <div>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-4 rounded mx-2 ${
                  activeTab == tab
                    ? "bg-green-400 text-black"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        {/* tab card section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCards.map((card) => (
            <motion.div
              initial={{ opacity: 0, x:10 }}
              whileInView={{ opacity: 1, x: 0}}
              className="p-4 border rounded shadow-sm space-y-2"
              id={card.id}
              key={card.id}
            >
              <img
              src={card.image} alt="" className="h-[400px] w-full object-cover" />
              <p className="text-xl font-semibold">{card.title}</p>
              <p className="text-gray-900 font-semibold">{card.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tab;
