
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const blogPosts = [
  {
    id: 1,
    title: "10 SEO Strategies That Actually Work in 2025",
    excerpt:
      "Learn the most effective SEO strategies that are driving real results in today's competitive digital landscape.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "SEO",
    date: "May 2, 2025",
    author: "Sarah Johnson",
    authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    title: "How to Create a Content Marketing Strategy That Converts",
    excerpt:
      "Discover how to develop a content marketing strategy that not only engages your audience but also drives conversions.",
    image:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Content Marketing",
    date: "April 28, 2025",
    author: "David Chen",
    authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    title: "Social Media Trends to Watch in 2025",
    excerpt:
      "Stay ahead of the curve with these emerging social media trends that will shape marketing strategies in 2025.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Social Media",
    date: "April 20, 2025",
    author: "James Wilson",
    authorImage: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    id: 4,
    title: "The Ultimate Guide to Email Marketing Automation",
    excerpt:
      "Learn how to leverage email marketing automation to nurture leads, increase engagement, and drive conversions.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Email Marketing",
    date: "April 15, 2025",
    author: "Melissa Rodriguez",
    authorImage: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 5,
    title: "How to Measure the ROI of Your Digital Marketing Campaigns",
    excerpt:
      "Discover practical methods to accurately measure and analyze the return on investment of your digital marketing efforts.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Analytics",
    date: "April 8, 2025",
    author: "Sarah Johnson",
    authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 6,
    title: "Website Design Trends That Improve Conversion Rates",
    excerpt:
      "Explore the latest web design trends that not only look great but also help convert more visitors into customers.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Web Design",
    date: "April 2, 2025",
    author: "David Chen",
    authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const categories = [
  "All",
  "SEO",
  "Content Marketing",
  "Social Media",
  "Email Marketing",
  "Analytics",
  "Web Design",
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-noor-brown to-noor-darkBrown py-20">
        <div className="container-width section-padding text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Insights, strategies, and tips to help you succeed in the digital
            marketing landscape.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container-width section-padding">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div>
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {["All", "SEO", "Content Marketing", "Social Media", "Email Marketing", "Analytics", "Web Design"].map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={
                      selectedCategory === category
                        ? "bg-noor-gold hover:bg-opacity-90 text-white"
                        : ""
                    }
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col border border-noor-lightGray"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-noor-gold text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-bold text-noor-brown hover:text-noor-gold transition-base">
                      <a href="#">{post.title}</a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-noor-gray text-sm mb-4">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="border-t border-noor-lightGray pt-4 flex justify-between items-center">
                    <div className="flex items-center">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <span className="text-xs text-noor-gray">{post.author}</span>
                    </div>
                    <span className="text-xs text-noor-gray">{post.date}</span>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2 text-noor-brown">No articles found</h3>
              <p className="text-noor-gray">
                Try adjusting your search or filter to find what you're looking
                for.
              </p>
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-noor-gold text-white"
              >
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-noor-lightGray">
        <div className="container-width section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-noor-brown">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-noor-darkBrown mb-8">
              Get the latest digital marketing insights and tips delivered
              straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-grow"
              />
              <Button className="bg-noor-gold hover:bg-opacity-90 text-white whitespace-nowrap">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
