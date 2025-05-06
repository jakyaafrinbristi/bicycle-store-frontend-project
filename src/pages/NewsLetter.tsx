/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSubscribeNewsletterMutation } from '@/redux/features/newsletter/newsletterApi';
import { useState } from 'react';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribeNewsletter, { isLoading }] = useSubscribeNewsletterMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await subscribeNewsletter(email).unwrap();
      toast.success('Subscription successful!', {
        style: {
          background: '#B2EBF2',
          color: '#006064', 
          border: '1px solid #4DD0E1',
          fontSize: '16px',
        },
        position: 'top-center',
        duration: 3000
      });
      setEmail('');
    } catch (error: any) {
      toast.error(error?.data?.message || 'Subscription failed', {
        style: {
          background: '#FFCDD2',
          color: '#C62828' 
        }
      });
    }
  };

  return (
  <div>
      <h2 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-6">
      💌  Stay Updated with Our Newsletter
      </h2>
      <p className="space-y-3 max-w-2xl mx-auto mb-6 text-gray-700 text-center dark:text-teal-200">
      Join our community of subscribers who receive exclusive content, early access to new features, 
      and special offers straight to their inbox.
      </p>
       <div className="container mx-auto bg-teal-50 dark:from-teal-700 dark:to-teal-800 rounded-xl shadow-lg p-6 md:p-8 lg:p-10">
       <div className="max-w-2xl mx-auto text-center">
         <h2 className="text-2xl md:text-3xl font-bold text-teal-800 dark:text-teal-100 mb-4">
           Subscribe to Our Newsletter
         </h2>
         <p className="text-teal-600 dark:text-teal-200 mb-6">
           Get the latest updates, offers, and exclusive content delivered straight to your inbox.
         </p>
         
         <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
           <input
             type="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             placeholder="Enter your email address"
             className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300 dark:focus:ring-teal-500 dark:bg-gray-700 dark:text-white"
             required
           />
           <button
             type="submit"
             disabled={isLoading}
             className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed dark:bg-teal-600 dark:hover:bg-teal-700"
           >
             {isLoading ? 'Subscribing...' : 'Subscribe'}
           </button>
         </form>
         
         <p className="text-teal-600 dark:text-teal-300 text-sm mt-4">
           We respect your privacy. Unsubscribe at any time.
         </p>
       </div>
     </div>
  </div>
  );
};

export default Newsletter;