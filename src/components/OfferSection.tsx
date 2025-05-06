import { Gift, Star, Flame } from "lucide-react";
import Marquee from "react-fast-marquee";

const offers = [
  {
    title: "Summer Sale",
    description: "Get 30% off on all mountain bikes",
    badge: "🔥 Hot",
    icon: <Flame className="w-8 h-8 text-red-500" />,
    color: "border-red-300 bg-red-50",
  },
  {
    title: "New User Offer",
    description: "First ride free up to $50",
    badge: "🎉 New",
    icon: <Gift className="w-8 h-8 text-purple-500" />,
    color: "border-purple-300 bg-purple-50",
  },
  {
    title: "Top Rated Deal",
    description: "Flat 20% off on all road bikes for rated users",
    badge: "⭐ Featured",
    icon: <Star className="w-8 h-8 text-yellow-500" />,
    color: "border-yellow-300 bg-yellow-50",
  },
];

export const OfferSection = () => {
  return (
    <section className="py-16 bg-white-100 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
        🔥 Our Latest Offers
      </h2>
      
      <Marquee speed={100} gradient={false} pauseOnHover>
        {offers.map((offer, index) => (
          <div 
            key={index}
            className={`mx-4 p-6 rounded-2xl shadow-md border-t-4 ${offer.color} dark:bg-gray-800 w-80 h-50`}
          >
            <div className="flex items-center gap-3">
              {offer.icon}
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                {offer.badge}
              </span>
            </div>
            <h3 className="text-2xl font-bold mt-4 text-gray-800 dark:text-white">
              {offer.title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {offer.description}
            </p>
          </div>
        ))}
      </Marquee>
    </section>
  );
};
