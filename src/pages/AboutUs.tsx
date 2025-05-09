import { Link } from "react-router";

const AboutImage1 =
  "https://plus.unsplash.com/premium_photo-1670002254342-f621b2841cd3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const AboutImage2 =
  "https://images.unsplash.com/photo-1585160159207-95884c758032?q=80&w=1580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const AboutUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 md:py-28 relative">
      {/* Decorative elements */}
      <div className="absolute -top-10 left-0 w-32 h-32 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 relative z-10">
        {/* Images Section */}
        <div className="relative flex justify-center lg:justify-end group">
          <img
            src={AboutImage1}
            alt="Cycling adventure"
            className="w-full lg:w-[85%] rounded-3xl shadow-2xl object-cover aspect-[4/3] transition-all duration-700 group-hover:shadow-teal-200/50 group-hover:-translate-y-1"
          />
          <div className="absolute -bottom-12 -left-8 hidden xl:block transition-all duration-500 group-hover:-translate-x-2">
            <div className="relative">
              <div className="absolute -inset-2 bg-teal-100/40 rounded-2xl -z-10 rotate-6"></div>
              <img
                src={AboutImage2}
                alt="Happy cyclist"
                className="w-[250px] rounded-2xl border-8 border-white dark:border-gray-900 shadow-xl transform transition-transform duration-500 group-hover:rotate-1"
              />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="text-center lg:text-left space-y-8">
          <div className="inline-flex flex-col items-center lg:items-start">
            <span className="text-sm font-semibold tracking-wider text-teal-600 uppercase mb-2">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white leading-tight">
              Pedaling Passion <br className="hidden lg:block"/> Since Day One
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full mt-4 mb-6"></div>
          </div>
          
          <div className="space-y-5 text-lg">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              At <span className="font-medium text-teal-600 dark:text-teal-400">Bicycle Store</span>, we don't just sell bikes—we fuel adventures. Born from a love of two wheels, we've grown into a community hub for cyclists of all levels.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Our carefully curated selection blends cutting-edge technology with timeless design, ensuring every ride is pure joy. From urban commutes to mountain trails, we've got your perfect match.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              More than a store, we're your cycling partners—offering expert advice, maintenance services, and group rides to connect you with fellow enthusiasts.
            </p>
          </div>
          
          <Link to ="/meet">
          <button className="mt-6 px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium rounded-full shadow-lg hover:shadow-teal-300/50 hover:scale-[1.02] transition-all duration-300">
            Meet Our Team
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};