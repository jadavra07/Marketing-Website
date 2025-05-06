
import React from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import CtaSection from "@/components/home/CtaSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <NewsletterSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
