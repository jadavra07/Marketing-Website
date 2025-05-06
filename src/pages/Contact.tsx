
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    service: "Select a service",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        service: "Select a service",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-noor-darkBrown to-noor-brown py-20">
        <div className="container-width section-padding text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Have a question or ready to start a project? Get in touch with our
            team and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-noor-brown">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(123) 456-7890"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service You're Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option disabled>Select a service</option>
                    <option value="Search Engine Optimization">Search Engine Optimization (SEO)</option>
                    <option value="Social Media Marketing">Social Media Marketing (SMM)</option>
                    <option value="Content Marketing">Content Marketing</option>
                    <option value="Email Marketing">Email Marketing</option>
                    <option value="E-commerce Marketing">E-commerce Marketing (Shopify, Amazon, etc.)</option>
                    <option value="Local SEO">Local SEO (for local businesses)</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project or inquiry"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-noor-gold hover:bg-opacity-90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-noor-brown">Contact Information</h2>
              <div className="space-y-8 mb-12">
                <div className="flex gap-4">
                  <div className="bg-noor-gold bg-opacity-10 p-3 rounded-lg">
                    <MapPin className="text-noor-gold h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Office Location</h3>
                    <p className="text-gray-600">
                      Ahmedabad
                      <br />
                      Gujarat, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-noor-gold bg-opacity-10 p-3 rounded-lg">
                    <Mail className="text-noor-gold h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <a
                      href="mailto:hitenjadavra3@gmail.com"
                      className="text-gray-600 hover:text-noor-gold transition-base"
                    >
                      hitenjadavra3@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-noor-gold bg-opacity-10 p-3 rounded-lg">
                    <Phone className="text-noor-gold h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <a
                      href="tel:+916351220752"
                      className="text-gray-600 hover:text-noor-gold transition-base"
                    >
                      +91 6351220752
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-noor-gold bg-opacity-10 p-3 rounded-lg">
                    <Clock className="text-noor-gold h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Weekends: Closed
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-6 text-noor-brown">Follow Us</h2>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-noor-gold bg-opacity-10 hover:bg-opacity-20 p-3 rounded-lg transition-base"
                  aria-label="Twitter"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="text-noor-gold"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-noor-gold bg-opacity-10 hover:bg-opacity-20 p-3 rounded-lg transition-base"
                  aria-label="LinkedIn"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="text-noor-gold"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-noor-gold bg-opacity-10 hover:bg-opacity-20 p-3 rounded-lg transition-base"
                  aria-label="Facebook"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="text-noor-gold"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-noor-gold bg-opacity-10 hover:bg-opacity-20 p-3 rounded-lg transition-base"
                  aria-label="Instagram"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="text-noor-gold"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-noor-lightGray">
        <div className="container-width section-padding">
          <h2 className="text-3xl font-bold mb-8 text-center text-noor-brown">
            Find Us
          </h2>
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Office Location"
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117201.3692525319!2d72.48994226937446!3d23.02185519057766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1653901458001!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
