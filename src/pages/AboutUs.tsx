const AboutImage1 =
  "https://plus.unsplash.com/premium_photo-1670002254342-f621b2841cd3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const AboutImage2 =
  "https://images.unsplash.com/photo-1585160159207-95884c758032?q=80&w=1580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20 px-4 mb-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Images Section */}
        <div className="relative flex justify-center lg:justify-end">
          <img
            src={AboutImage1}
            alt="Main About"
            className="w-full lg:w-4/5 rounded-2xl shadow-2xl object-cover"
          />
          <div className="absolute -bottom-14 -left-6 hidden xl:block">
            <img
              src={AboutImage2}
              alt="Secondary About"
              className="w-[250px] rounded-2xl border-[10px] border-white dark:border-gray-900 shadow-xl"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="text-center lg:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-100">
            About Our Bicycle
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto lg:mx-0 mb-4" />
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Welcome to <span className="font-semibold text-teal-600 dark:text-teal-400">Bicycle Store</span>, your trusted companion on every journey. Whether you're cruising city streets or tackling rugged trails, we’re here to empower your ride.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
            We believe in cycling as a way of life — a healthier, more sustainable, and joyful path forward. Our collection blends performance with style, giving you the freedom to explore without limits.
          </p>
        </div>
      </div>
    </div>
  );
};
