import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    text: "Tech Codeez completely transformed our online presence. Their strategic approach to digital marketing has increased our leads by 175% in just 6 months. We couldn't be happier with the results!",
    name: "Adome Jadav",
    title: "Marketing Director, TechFlow Inc.",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    logo: "https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png",
  },
  {
    id: 2,
    text: "Working with Tech Codeez has been a game-changer for our brand. Their team's expertise in SEO and content marketing helped us achieve top rankings for our most valuable keywords, driving significant revenue growth.",
    name: "Michael Chen",
    title: "CEO, GrowthWave",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    logo: "https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png",
  },
  {
    id: 3,
    text: "The social media strategy Tech Codeez Marketing created for our launch campaign exceeded all expectations. We saw engagement rates triple within weeks, and our subscriber base grew faster than we ever anticipated.",
    name: "Sarah Johnson",
    title: "Founder, EcoLife",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    logo: "https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo4.png",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-agency-blue">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-agency-teal mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We pride ourselves on delivering exceptional results for our
            clients. Here's what some of them have to say about working with us.
          </p>
        </div>

        <div className="relative">
          <Card className="border-none shadow-lg bg-gradient-to-br from-agency-blue to-[#172554] text-white overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-4 flex items-center justify-center bg-agency-blue p-8">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-4 border-white">
                      <img
                        src={testimonials[activeIndex].image}
                        alt={testimonials[activeIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mt-4">
                      {testimonials[activeIndex].name}
                    </h3>
                    <p className="text-agency-teal">
                      {testimonials[activeIndex].title}
                    </p>
                  </div>
                </div>
                <div className="md:col-span-8 p-8 md:p-12">
                  <svg
                    className="h-12 w-12 text-agency-teal opacity-30 mb-4"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-lg md:text-xl mb-6">
                    {testimonials[activeIndex].text}
                  </p>

                  <div className="flex justify-between items-center mt-8">
                    <div className="h-10 bg-white p-2 rounded">
                      <img
                        src={testimonials[activeIndex].logo}
                        alt="Client logo"
                        className="h-full w-auto"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-white text-white hover:bg-white hover:text-agency-blue"
                        onClick={handlePrev}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-white text-white hover:bg-white hover:text-agency-blue"
                        onClick={handleNext}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 mx-1 rounded-full ${
                index === activeIndex
                  ? "bg-agency-teal"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
