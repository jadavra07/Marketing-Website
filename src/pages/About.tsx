import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      title: "Founder & CEO",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "With over 15 years of experience in digital marketing, Sarah founded Noor Digital with a mission to help businesses achieve measurable growth.",
    },
    {
      name: "David Chen",
      title: "Creative Director",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "David leads our creative team with his innovative approach to design and branding that helps our clients stand out in crowded markets.",
    },
    {
      name: "Melissa Rodriguez",
      title: "Head of SEO",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      bio: "Melissa's data-driven strategies have helped countless clients achieve top rankings and increased organic traffic.",
    },
    {
      name: "James Wilson",
      title: "Social Media Strategist",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      bio: "James specializes in creating engaging social media campaigns that build communities and drive conversions.",
    },
  ];

  const values = [
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
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Integrity",
      description:
        "We pride ourselves on transparent communication and honest relationships with our clients.",
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
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Innovation",
      description:
        "We stay at the forefront of digital trends to deliver cutting-edge solutions for our clients.",
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
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Results-Driven",
      description:
        "We measure success by the tangible results and ROI we generate for our clients.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-noor-brown to-noor-darkBrown py-20">
        <div className="container-width section-padding text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Noor Digital marketing
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're a team of digital marketing experts passionate about helping
            businesses grow through innovative strategies and creative
            solutions.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-noor-brown">
                Our Story
              </h2>
              <div className="w-16 h-1 bg-noor-gold mb-6"></div>
              <p className="text-noor-gray mb-4">
                Founded in 2024, Noor Digital was created with one mission: to
                deliver real, measurable results through impactful digital
                marketing strategies. Our founder, Hiten Jadavra, recognized the
                industry's focus on vanity metrics, and set out to change that.
                At Noor Digital, we prioritize strategies that drive business
                growth rather than just numbers on a screen.
              </p>
              <p className="text-noor-gray mb-4">
                What started as a one-person consultancy has grown into a
                full-service digital marketing agency with a team of experts
                across SEO, content marketing, social media, and web
                development.
              </p>
              <p className="text-noor-gray">
                Today, we're proud to have helped over 200 businesses across
                various industries increase their online visibility, generate
                quality leads, and grow their revenue through strategic digital
                marketing.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-4 -bottom-4 w-full h-full bg-noor-beige rounded-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Our team brainstorming"
                className="w-full h-auto rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-noor-lightGray">
        <div className="container-width section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-noor-brown">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-noor-gold mx-auto mb-6"></div>
            <p className="text-noor-darkBrown max-w-2xl mx-auto">
              These principles guide everything we do and how we work with our
              clients to achieve exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-noor-brown">
                  {value.title}
                </h3>
                <p className="text-noor-gray">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container-width section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-noor-brown">
              Meet Our Team
            </h2>
            <div className="w-20 h-1 bg-noor-gold mx-auto mb-6"></div>
            <p className="text-noor-gray max-w-2xl mx-auto">
              Our talented team of digital marketing experts is passionate about
              helping your business succeed online.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-noor-brown">
                    {member.name}
                  </h3>
                  <p className="text-noor-gold mb-4">{member.title}</p>
                  <p className="text-noor-gray text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-noor-brown">
        <div className="container-width section-padding text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve its digital
            marketing goals.
          </p>
          <Button
            asChild
            className="bg-noor-beige hover:bg-opacity-90 text-noor-darkBrown px-8 py-6 text-lg"
          >
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
