import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const { toast } = useToast();
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would call an API
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter!",
    });
    setEmail("");
  };

  return (
    <section className="bg-noor-darkBrown text-white pt-16 pb-8">
      <div className="container-width section-padding">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated With Our Newsletter
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get the latest digital marketing trends, tips, and insights
            delivered directly to your inbox.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-grow bg-white bg-opacity-10 border-0 text-white placeholder:text-gray-400 focus:ring-agency-teal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button className="bg-noor-gold hover:bg-opacity-90 whitespace-nowrap">
              Subscribe Now
            </Button>
          </form>

          <p className="text-sm text-gray-400 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
