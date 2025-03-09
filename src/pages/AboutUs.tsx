import AboutImage1 from "../assets/images/about1-unsplash.jpg";
import AboutImage2 from "../assets/images/about2-unsplash.jpg";

export const AboutUs = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto mt-10 gap-8 px-5 mb-28">
      
      {/* Image Section */}
      <div className="relative flex justify-center lg:justify-end">
        <img
          className="w-full lg:w-3/4 rounded-tr-2xl rounded-bl-2xl"
          src={AboutImage1}
          alt="About Image 1"
        />
        <div className="w-[60vw] sm:w-[40vw] md:w-[30vw] lg:w-[25vw] absolute left-5 -bottom-20 hidden xl:block">
          <img
            className="rounded-tr-2xl rounded-bl-2xl border-t-8 border-r-8 border-t-white border-r-white shadow-lg"
            src={AboutImage2}
            alt="About Image 2"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center text-center lg:text-left">
        <h1 className="font-bold text-2xl underline mb-5 text-center">About Us</h1>
        <p className="max-w-3xl mx-auto lg:mx-0 px-6 font-semibold text-gray-500">
          Welcome to Bicycle Store, your one-stop destination for premium bicycles and accessories. 
          We are passionate about cycling and committed to providing top-quality bikes for riders of all levels.
        </p>
      </div>
      
    </div>
  );
};
