import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-noor-gold"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
    title: "Search Engine Optimization (SEO)",
    description:
      "Boost your website's visibility and rank higher in search results to attract more organic traffic.",
    features: [
      "Technical SEO",
      "On-Page Optimization",
      "Keyword Research",
      "Link Building",
    ],
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-noor-gold"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
        />
      </svg>
    ),
    title: "Social Media Marketing (SMM)",
    description:
      "Engage your audience where they're active with targeted campaigns that build community and drive conversions.",
    features: [
      "Platform Strategy",
      "Content Creation",
      "Community Management",
      "Paid Social Ads",
    ],
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-noor-gold"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
    title: "Content Marketing",
    description:
      "Strategic content that tells your story, builds authority, and drives organic traffic to your website.",
    features: [
      "Blog Writing",
      "SEO Content",
      "Content Strategy",
      "Visual Content",
    ],
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-noor-gold"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Email Marketing",
    description:
      "Build relationships with your customers through personalized email campaigns that drive engagement and sales.",
    features: ["Campaign Design", "List Management", "Automation", "Analytics"],
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-noor-gold"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    ),
    title: "E-commerce Marketing",
    description:
      "Drive sales and growth for your online store with specialized marketing strategies for platforms like Shopify and Amazon.",
    features: [
      "Platform Optimization",
      "Product Listings",
      "PPC Ads",
      "Conversion Rate Optimization",
    ],
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-noor-gold"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Local SEO",
    description:
      "Help local customers find your business when they're searching for products and services in your area.",
    features: [
      "Google Business Profile",
      "Local Citations",
      "Review Management",
      "Local Link Building",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-noor-lightGray">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-noor-brown">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-noor-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer powerful digital marketing solutions designed specifically
            to fuel your business growth and connect with your target audience.
            Here’s how we can supercharge your success:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
            >
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-noor-brown">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-noor-gold rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link
                  to="/services"
                  className="text-noor-gold font-medium flex items-center hover:text-opacity-80 transition-base"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-noor-brown hover:bg-opacity-90 px-8">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
