import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-noor-brown to-noor-darkBrown py-20 md:py-32 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 bottom-0 w-1/2 h-full">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-10"
          >
            <path
              fill="#D4B18F"
              d="M45.3,-76.2C58.2,-69.1,67.6,-55.3,74.3,-41C80.9,-26.6,84.8,-11.6,83.8,3C82.8,17.5,76.9,31.7,68.1,44.3C59.3,56.9,47.6,67.9,34.2,73.5C20.7,79,6.6,79.2,-7.4,77.4C-21.4,75.6,-35.3,71.9,-44.8,63.2C-54.3,54.6,-59.5,41.1,-65,27.9C-70.5,14.7,-76.3,1.8,-76.8,-11.4C-77.4,-24.7,-72.8,-38.3,-64.2,-49.2C-55.5,-60.2,-43,-68.5,-30,-72.2C-17,-75.8,-3.5,-74.9,10.2,-71.9C24,-68.9,48.1,-63.9,60.7,-52.9C73.4,-42,74.8,-25,75.7,-8.2C76.6,8.7,76.9,25.3,70.6,38.8C64.3,52.2,51.3,62.5,37.1,69.6C22.8,76.6,7.3,80.5,-7,79.9C-21.2,79.4,-34.2,74.5,-46.7,67.5C-59.3,60.6,-71.4,51.6,-79.1,39.3C-86.8,27,-90.2,11.4,-88.2,-2.9C-86.3,-17.2,-79.1,-30.2,-70.4,-42C-61.7,-53.8,-51.5,-64.4,-39.3,-73C-27.1,-81.5,-13.5,-88,0.2,-88.3C13.9,-88.7,27.9,-83,45.3,-76.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>

      <div className="container-width section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
              Transform Your{" "}
              <span className="text-noor-beige">Digital Presence</span>
            </h1>
            <p
              className="text-lg md:text-xl text-noor-lightGray mb-8 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              We create cutting-edge digital strategies that not only empower
              brands to stand out from the crowd but also forge powerful
              connections with their audience, driving real, measurable results
              that elevate your business to new heights.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button className="bg-noor-gold hover:bg-opacity-90 px-8 py-6 text-lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-noor-darkBrown px-8 py-6 text-lg"
              >
                Our Services
              </Button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -left-8 -top-8 w-64 h-64 bg-noor-beige rounded-lg opacity-20 animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Digital Marketing Team"
                className="w-full h-auto rounded-lg shadow-2xl relative z-10 animate-fade-in"
                style={{ animationDelay: "0.6s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
