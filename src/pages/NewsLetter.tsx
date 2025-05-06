import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppSelector } from "@/redux/hooks";
import { useSubscribeNewsletterMutation } from "@/redux/features/newsletter/newsletterApi";
import { useState } from "react";
import { toast } from "sonner";

const NewsletterSubscription = () => {
  const { user } = useAppSelector(state => state.auth);
  const [email, setEmail] = useState(user?.email || "");
  const [subscribeNewsletter] = useSubscribeNewsletterMutation();

  const handleSubscribe = async () => {
    if (!email) {
      toast.error("Please provide an email address");
      return;
    }

    const toastId = toast.loading("Subscribing...");

    try {
      await subscribeNewsletter({ email }).unwrap();
      toast.success("✅ Successfully subscribed!", { id: toastId });
      setEmail("");
    } catch (error) {
      let message = "Something went wrong!";
      if (
        typeof error === "object" &&
        error !== null &&
        "data" in error &&
        typeof error.data === "object" &&
        error.data !== null &&
        "message" in error.data
      ) {
        message = (error.data as { message: string }).message;
      }
      toast.error(`❌ ${message}`, { id: toastId });
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 shadow-lg rounded-xl mt-10 border space-y-4">
      <h2 className="text-xl font-semibold text-center text-teal-600">Subscribe to our Newsletter</h2>
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        disabled={!!user?.email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        onClick={handleSubscribe}
        className="w-full bg-teal-500 hover:bg-teal-700"
      >
        Subscribe
      </Button>
    </div>
  );
};

export default NewsletterSubscription;
