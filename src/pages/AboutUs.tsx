import AboutImage1 from "../assets/images/about1-unsplash.jpg";
import AboutImage2 from "../assets/images/about2-unsplash.jpg";

export const AboutUs = () => {
  return (
    <div className="container mx-auto mt-20 px-4 mb-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

        <div className="relative flex justify-center lg:justify-end">
          <img
            className="w-full lg:w-4/5 rounded-2xl shadow-xl"
            src={AboutImage1}
            alt="About Image 1"
          />
          <div className="absolute -bottom-16 -left-6 hidden xl:block">
            <img
              className="w-[250px] rounded-2xl border-8 border-white shadow-2xl"
              src={AboutImage2}
              alt="About Image 2"
            />
          </div>
        </div>

     
        <div className="text-center lg:text-left space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-800">
           About Our Bicycle
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto lg:mx-0 mb-3" />
          <p className="text-gray-800 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Welcome to <span className="font-semibold text-teal-600">Bicycle Store</span>, your trusted companion on every journey. Whether you're cruising city streets or tackling rugged trails, we’re here to empower your ride.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
            We believe in cycling as a way of life — a healthier, more sustainable, and joyful path forward. Our collection is curated to blend performance with style, giving you the freedom to explore.
          </p>
        </div>
      </div>
    </div>
  );
};
