/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSubscribeNewsletterMutation } from '@/redux/features/newsletter/newsletterApi';
import { useState } from 'react';
import { toast } from 'sonner';
import { FiMail, FiSend } from 'react-icons/fi';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribeNewsletter, { isLoading }] = useSubscribeNewsletterMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await subscribeNewsletter(email).unwrap();
      toast.success('Subscription successful!', {
        style: {
          background: '#e0f7fa',
          color: '#006064',
          border: '1px solid #80deea',
          fontSize: '16px',
        },
        icon: <FiMail className="text-teal-600" />,
        position: 'top-center',
        duration: 3000
      });
      setEmail('');
    } catch (error: any) {
      toast.error(error?.data?.message || 'Subscription failed', {
        style: {
          background: '#ffebee',
          color: '#c62828',
          border: '1px solid #ef9a9a'
        },
        icon: '⚠️',
        position: 'top-center'
      });
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 md:py-16 lg:py-20">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 dark:bg-teal-900/50 rounded-full mb-4">
          <FiMail className="text-3xl text-teal-600 dark:text-teal-400" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">
          Stay Updated with Our Newsletter
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full mx-auto mb-4"></div>
        <p className="text-lg text-gray-600 dark:text-teal-200 max-w-2xl mx-auto">
          Join our community of subscribers who receive exclusive content, early access to new features, 
          and special offers straight to their inbox.
        </p>
      </div>

      <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/50 rounded-2xl shadow-lg p-8 md:p-10 lg:p-12 border border-teal-100 dark:border-teal-800/50">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-lg font-medium text-teal-800 dark:text-teal-200">
                Get the latest updates
              </label>
              <div className="relative flex items-center">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-5 py-4 pr-12 rounded-xl border border-teal-200 focus:ring-2 focus:ring-teal-300 focus:border-teal-400 dark:bg-gray-800 dark:border-teal-700 dark:focus:ring-teal-600 dark:focus:border-teal-500 dark:text-white dark:placeholder-teal-400/70"
                  required
                />
                <FiMail className="absolute right-4 text-teal-400 dark:text-teal-500" />
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-6 py-4 rounded-xl font-medium transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-teal-300/30 dark:shadow-teal-700/30"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Subscribing...
                </>
              ) : (
                <>
                  <FiSend /> Subscribe Now
                </>
              )}
            </button>
            
            <p className="text-sm text-teal-700/80 dark:text-teal-300/80 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;