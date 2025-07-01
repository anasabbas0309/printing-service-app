import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, CheckCircle, Zap, Shield, Heart, Quote, Truck, Clock, Palette, Camera, Gift, Phone, Mail, MapPin, Play, Download, TrendingUp, Globe, Sparkles, Package, Target, Headphones, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../components/common/ProductCard';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Turn Your Ideas Into",
      subtitle: "Real-World Print Magic",
      description: "From custom business cards to employee joining kits, branded signage, corporate gifting and everything in between - we've been India's go-to print-on-demand platform since 2006.",
      bgGradient: "from-blue-600 to-blue-800",
      accentColor: "yellow-400",
      image: "🎨",
      stats: [
        { label: "Production Facility", value: "50,000+ Sq. Ft" },
        { label: "Retail Stores", value: "28+" },
        { label: "Major Cities", value: "6" },
        { label: "Years Experience", value: "18+" }
      ]
    },
    {
      id: 2,
      title: "Premium Quality",
      subtitle: "Professional Printing",
      description: "State-of-the-art printing technology with rigorous quality control processes. We ensure every print meets the highest standards of excellence.",
      bgGradient: "from-purple-600 to-indigo-800",
      accentColor: "pink-400",
      image: "🏆",
      stats: [
        { label: "Happy Customers", value: "1M+" },
        { label: "Orders Delivered", value: "10M+" },
        { label: "Quality Rating", value: "4.9/5" },
        { label: "Same Day Delivery", value: "Available" }
      ]
    },
    {
      id: 3,
      title: "Custom Solutions",
      subtitle: "For Every Business",
      description: "Whether you're a startup founder looking to print just 5 T-shirts or an enterprise rolling out 5,000 onboarding kits - we've got you covered with flexible solutions.",
      bgGradient: "from-green-600 to-teal-800",
      accentColor: "emerald-400",
      image: "🚀",
      stats: [
        { label: "Minimum Order", value: "Just 1 Piece" },
        { label: "Bulk Discounts", value: "Up to 40%" },
        { label: "Design Support", value: "Free" },
        { label: "Delivery Time", value: "24-48 Hours" }
      ]
    }
  ];

  const featuredProducts = [
    {
      id: '1',
      name: 'Business Cards',
      category: 'Business',
      basePrice: 299,
      image: require('../assets/business-card.jpg'),
      description: 'Premium business cards with professional finish',
      customizable: true,
    },
    {
      id: '2',
      name: 'Custom T-Shirts',
      category: 'Apparel',
      basePrice: 599,
      image: require('../assets/tshirt.jpg'),
      description: 'High-quality custom printed t-shirts',
      customizable: true,
    },
    {
      id: '3',
      name: 'Brochures',
      category: 'Marketing',
      basePrice: 499,
      image: require('../assets/brochure.jpg'),
      description: 'Professional brochures for your business',
      customizable: true,
    },
  ];

  const stats = [
    { icon: Users, label: 'Happy Customers', value: '1M+' },
    { icon: Package, label: 'Orders Delivered', value: '10M+' },
    { icon: Award, label: 'Years of Excellence', value: '18+' },
    { icon: Globe, label: 'Cities Served', value: '50+' },
  ];

  const services = [
    {
      icon: '📇',
      title: 'Business Cards',
      description: 'Professional business cards that make lasting impressions'
    },
    {
      icon: '👕',
      title: 'Custom Apparel',
      description: 'T-shirts, hoodies, and corporate uniforms with your branding'
    },
    {
      icon: '📋',
      title: 'Marketing Materials',
      description: 'Brochures, flyers, and promotional materials for your business'
    },
    {
      icon: '🎁',
      title: 'Corporate Gifting',
      description: 'Branded gifts and employee onboarding kits'
    },
    {
      icon: '🪧',
      title: 'Signage & Banners',
      description: 'Indoor and outdoor signage solutions for your business'
    },
    {
      icon: '📚',
      title: 'Stationery',
      description: 'Letterheads, envelopes, and complete stationery sets'
    }
  ];

  const features = [
    {
      icon: Target,
      title: 'Print-on-Demand',
      description: 'Order as few as 1 piece or as many as 10,000+ with no minimum order requirements'
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Fast production and delivery with same-day printing available for urgent orders'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'State-of-the-art printing technology with rigorous quality control processes'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Dedicated customer support team available round the clock for assistance'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Startup Founder',
      company: 'TechStart Solutions',
      content: 'Printo helped us create professional business cards and marketing materials that perfectly represented our brand. Excellent quality and service!',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'HR Manager',
      company: 'Global Corp',
      content: 'We ordered 500 employee onboarding kits and the quality was outstanding. The team handled our bulk order professionally and delivered on time.',
      rating: 5
    },
    {
      name: 'Amit Patel',
      role: 'Marketing Head',
      company: 'Creative Agency',
      content: 'From concept to delivery, Printo exceeded our expectations. Their design team understood our vision and brought it to life beautifully.',
      rating: 5
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Slideshow Section */}
      <section className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].bgGradient} text-white`}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
              <div className="absolute top-40 right-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
              <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
            </div>

            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <div className="text-8xl mb-6 animate-bounce">
                      {slides[currentSlide].image}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                      {slides[currentSlide].title}
                      <span className={`block text-${slides[currentSlide].accentColor}`}>
                        {slides[currentSlide].subtitle}
                      </span>
                    </h1>
                    <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-2xl">
                      {slides[currentSlide].description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/categories')}
                        className={`bg-${slides[currentSlide].accentColor} text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all duration-300 shadow-lg flex items-center justify-center`}
                      >
                        Start Printing Now
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/contact')}
                        className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center"
                      >
                        <Phone className="mr-2 w-5 h-5" />
                        Get Quote
                      </motion.button>
                    </div>
                  </motion.div>

                  {/* Stats Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative"
                  >
                    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
                      <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Us?</h3>
                      <div className="grid grid-cols-2 gap-6">
                        {slides[currentSlide].stats.map((stat, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                            className="text-center"
                          >
                            <div className={`text-2xl font-bold text-${slides[currentSlide].accentColor} mb-1`}>
                              {stat.value}
                            </div>
                            <div className="text-sm text-blue-100">{stat.label}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute top-8 right-8 bg-white bg-opacity-20 backdrop-blur-sm text-white px-4 py-2 rounded-full">
          <span className="font-semibold">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Print Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a startup founder looking to print just 5 T-shirts or an enterprise rolling out 5,000 onboarding kits - we've got you covered.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group cursor-pointer"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <div className="mt-4 flex items-center text-blue-600 font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Businesses Trust Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Headquartered in Bangalore, we operate a state-of-the-art production facility with cutting-edge technology.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2 text-yellow-400">
                  {stat.value}
                </h3>
                <p className="text-blue-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular printing solutions trusted by thousands of businesses.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={() => navigate('/categories')}
              className="bg-blue-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View All Products
            </button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied customers who trust us with their printing needs.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <Quote className="w-10 h-10 text-blue-600 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-blue-600 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs">{testimonial.company}</p>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Bring Your Ideas to Life?
            </h2>
            <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto">
              Whether you need 1 piece or 10,000+, we're here to help you create something amazing.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => navigate('/categories')}
                className="bg-yellow-500 text-blue-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Start Your Project
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-800 transition-all duration-300 transform hover:scale-105"
              >
                Get Custom Quote
              </button>
            </div>
            <div className="mt-10 flex items-center justify-center space-x-8 text-blue-200">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>No Minimum Orders</span>
              </div>
              <div className="flex items-center">
                <Truck className="w-5 h-5 mr-2" />
                <span>Pan-India Delivery</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                <span>Quality Guaranteed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                PrintCraft
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                India's leading print-on-demand platform since 2006. Turning ideas into real-world print magic.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                  <span className="text-white font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors">
                  <span className="text-white font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-700 transition-colors">
                  <span className="text-white font-bold">i</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Business Cards</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Custom Apparel</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Marketing Materials</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Corporate Gifts</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+91 80-4718-3999</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>support@printcraft.in</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Bangalore, India</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PrintCraft. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;