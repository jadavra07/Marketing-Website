
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      id: "web-design",
      title: "Web Design & Development",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-noor-gold"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      description:
        "We design and develop websites that not only look beautiful but also convert visitors into customers. Our websites are fully responsive, optimized for search engines, and built with user experience in mind.",
      deliverables: [
        "Custom Website Design",
        "Mobile Responsive Development",
        "E-commerce Solutions",
        "User Experience Optimization",
        "Website Maintenance & Support",
        "Performance Optimization",
      ],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "seo",
      title: "Search Engine Optimization",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-noor-gold"
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
      description:
        "Our SEO services help your business rank higher in search engine results, driving more organic traffic to your website. We use a data-driven approach to identify opportunities and implement proven strategies.",
      deliverables: [
        "Comprehensive SEO Audit",
        "Keyword Research & Strategy",
        "On-Page SEO Optimization",
        "Technical SEO Improvements",
        "Content Strategy",
        "Link Building Campaigns",
        "Local SEO",
        "Monthly Performance Reporting",
      ],
      image: "https://images.unsplash.com/photo-1571715268998-d6e79bed5fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "content-marketing",
      title: "Content Marketing",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-noor-gold"
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
      description:
        "Our content marketing services help you attract, engage, and convert your target audience through high-quality, valuable content. We develop comprehensive content strategies that align with your business goals.",
      deliverables: [
        "Content Strategy Development",
        "Blog Content Creation",
        "SEO-Optimized Articles",
        "Email Marketing Campaigns",
        "Ebooks & Whitepapers",
        "Case Studies",
        "Infographics & Visual Content",
        "Content Distribution",
      ],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "social-media",
      title: "Social Media Marketing",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-noor-gold"
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
      description:
        "We help you build a strong presence on social media platforms where your audience spends time. Our social media marketing services include strategy development, content creation, community management, and paid advertising.",
      deliverables: [
        "Social Media Strategy",
        "Content Calendar Development",
        "Content Creation (Graphics & Copy)",
        "Community Management",
        "Paid Social Media Campaigns",
        "Influencer Marketing",
        "Social Media Analytics",
        "Competitive Analysis",
      ],
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "ppc",
      title: "Pay-Per-Click Advertising",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-noor-gold"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      description:
        "Our PPC advertising services help you reach your target audience and drive immediate results. We develop and manage campaigns that maximize your return on investment across Google Ads, social media platforms, and display networks.",
      deliverables: [
        "Campaign Strategy & Setup",
        "Keyword Research & Selection",
        "Ad Copy Creation",
        "Landing Page Optimization",
        "Bid Management",
        "A/B Testing",
        "Conversion Tracking",
        "Performance Reporting",
      ],
      image: "https://images.unsplash.com/photo-1579532536935-619928decd08?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "email-marketing",
      title: "Email Marketing",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-noor-gold"
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
      description:
        "Our email marketing services help you nurture leads, engage customers, and drive sales through personalized email campaigns. We use data-driven strategies to optimize your email marketing performance.",
      deliverables: [
        "Email Marketing Strategy",
        "Newsletter Design & Setup",
        "Automated Email Sequences",
        "List Segmentation",
        "A/B Testing",
        "Performance Analysis",
        "Email Template Design",
        "Lead Nurturing Campaigns",
      ],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-noor-brown to-noor-darkBrown py-20">
        <div className="container-width section-padding text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We offer a comprehensive range of digital marketing services to help
            your business grow online and achieve measurable results.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container-width section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-noor-brown">
              How We Help Your Business Grow
            </h2>
            <div className="w-20 h-1 bg-noor-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide end-to-end digital marketing solutions tailored to your
              specific business goals, target audience, and industry.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex justify-center lg:justify-start mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-noor-brown text-center lg:text-left">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <h4 className="text-lg font-semibold mb-3 text-noor-brown">
                    What's Included:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-noor-gold mr-2 flex-shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative">
                    <div
                      className={`absolute ${
                        index % 2 === 0 ? "-right-4" : "-left-4"
                      } -bottom-4 w-full h-full bg-noor-gold rounded-lg opacity-30`}
                    ></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto rounded-lg shadow-lg relative z-10"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-noor-lightGray">
        <div className="container-width section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-noor-brown">Our Process</h2>
            <div className="w-20 h-1 bg-noor-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a proven approach to deliver successful digital marketing
              campaigns for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Discovery",
                description:
                  "We start by understanding your business, goals, target audience, and competition.",
              },
              {
                number: "02",
                title: "Strategy",
                description:
                  "We develop a customized strategy based on your objectives and our research findings.",
              },
              {
                number: "03",
                title: "Implementation",
                description:
                  "We execute the strategy with precision, creativity, and attention to detail.",
              },
              {
                number: "04",
                title: "Optimization",
                description:
                  "We continuously monitor, analyze, and optimize to improve performance and results.",
              },
            ].map((step, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-8">
                  <span className="text-6xl font-bold text-noor-gold opacity-30">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-bold mt-4 mb-2 text-noor-brown">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-noor-brown">
        <div className="container-width section-padding text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our digital marketing services can
            help you achieve your business goals.
          </p>
          <Button
            asChild
            className="bg-noor-gold hover:bg-opacity-90 text-white px-8 py-6 text-lg"
          >
            <Link to="/contact">Get a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
