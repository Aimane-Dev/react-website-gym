import Slider from "react-slick";

const TestiData = [
  {
    id: 1,

    name: "Maria luiss",
    text: "Hello my name is Maria",
    img: "maria.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione cupiditate hic assumenda quia neque enim libero dolorum voluptates ut nesciunt.",

    delay: 0.2,
  },
  {
    id: 2, // Changed to unique id
    name: "Maria luiss",
    text: "Hello my name is Maria",
    img: "maria.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione cupiditate hic assumenda quia neque enim libero dolorum voluptates ut nesciunt.",
    delay: 0.2,
  },
  {
    id: 3, // Changed to unique id
    name: "Maria luiss",
    text: "Hello my name is Maria",
    img: "maria.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione cupiditate hic assumenda quia neque enim libero dolorum voluptates ut nesciunt.",

    delay: 0.2,
  },
];

const Testi = () => {
  const setting = {
    dots: true,
    arrow: false,
    speed: 500,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      // Corrected typo here
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="container">
        {/* header section */}
        <div className="mb-10 w-[530px] ml-5">
          <h1 className=" text-gray-700 text-3xl font-bold">
          What Are The Costumer Saying About US
          </h1>
         
        </div>
        {/* Testi section */}
        <div>
          <Slider {...setting}>
            {TestiData.map((items) => {
              return (
                <div key={items.id}>
                  <div className="flex flex-col gap-4 p-8 mx-4 bg-gray-100  hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgb(0,0,0,0.15)] 
                 cursor-pointer">
                    {/* upper section */}
                    <div className="flex justify-start items-center gap-5">
                      <img src={items.img} className="w-16 h-16 rounded-full" />
                      <div className="">
                        <p className="text-xl font-semibold text-green-500">
                          {items.name}
                        </p>
                        <p className="text-gray-600">{items.text}</p>
                      </div>
                    </div>
                    {/* bottom section */}
                    <div className="flex justify-normal">
                      <p className="text-gray-600">
                        {items.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testi;
