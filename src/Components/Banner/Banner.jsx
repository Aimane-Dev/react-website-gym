const Banner = ({ Image, Title, subtitle, link, }) => {
  return (
    <div className="container pt-6">
      <div
        className="grid grid-cols-1 md:grid-cols-2
        space-y-6 md:space-y0 py-12 bg-green-50  rounded-xl"
      >
        {/* banner section */}
        <div>
          <img
            src={Image}
            alt=""
            className="w-[500px] object-cover
          xl:max-w-[600px] h-auto"
          />
        </div>

        {/* banner text section */}

        <div
          className="flex flex-col justify-center items-center sm:text-center
        md:text-left space-y-5 lg:max-w[500px]"
        >
          <p className="text-2xl  text-green-500 lg:text-4xl font-bold capitalize font-montserrat ">
            {Title}
          </p>
          <p className="flex justify-center md:justify-start font-montserrat">{subtitle}</p>
          <button className=" bg-green-500 py-5 px-8  w-max rounded-xl font-bold text-white font-montserrat">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
