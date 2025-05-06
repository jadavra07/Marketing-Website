
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-20 bg-noor-gold">
      <div className="container-width section-padding text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Elevate Your Digital Presence?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Partner with our expert team to create impactful digital strategies
          that drive real results for your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="bg-white text-noor-brown hover:bg-opacity-90 px-8 py-6 text-lg"
          >
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-noor-brown px-8 py-6 text-lg"
          >
            <Link to="/services">Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
