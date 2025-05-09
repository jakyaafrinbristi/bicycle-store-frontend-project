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
   <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-200 mb-4">
            Limited Time Offers
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Exclusive Deals Just For You
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't miss out on these special promotions to upgrade your ride
          </p>
        </div>
      
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
