import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import ProductCard from '../components/common/ProductCard';
import { Product } from '../types';

const ProductCategories: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Business', 'Apparel', 'Gifts', 'Marketing', 'Stationery'];

  const products: Product[] = [
    {
      id: '1',
      name: 'Business Cards',
      category: 'Business',
      basePrice: 299,
      image: require('../assets/business-card.jpg'),
      description: 'Professional business cards with premium finish',
      customizable: true,
      sizes: ['Standard', 'Mini', 'Square'],
      colors: ['White', 'Cream', 'Black']
    },
    {
      id: '2',
      name: 'Custom T-Shirts',
      category: 'Apparel',
      basePrice: 599,
      image: '/api/placeholder/300/200',
      description: 'High-quality custom printed t-shirts',
      customizable: true,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['White', 'Black', 'Navy', 'Red', 'Green']
    },
    {
      id: '3',
      name: 'Photo Mugs',
      category: 'Gifts',
      basePrice: 399,
      image: '/api/placeholder/300/200',
      description: 'Personalized mugs with your photos',
      customizable: true,
      sizes: ['11oz', '15oz'],
      colors: ['White', 'Black', 'Blue']
    },
    {
      id: '4',
      name: 'Flyers',
      category: 'Marketing',
      basePrice: 199,
      image: '/api/placeholder/300/200',
      description: 'Eye-catching flyers for your business',
      customizable: true,
      sizes: ['A4', 'A5', 'A6']
    },
    {
      id: '5',
      name: 'Letterheads',
      category: 'Stationery',
      basePrice: 249,
      image: '/api/placeholder/300/200',
      description: 'Professional letterheads for your company',
      customizable: true,
      sizes: ['A4']
    },
    {
      id: '6',
      name: 'Canvas Prints',
      category: 'Gifts',
      basePrice: 899,
      image: '/api/placeholder/300/200',
      description: 'Beautiful canvas prints of your memories',
      customizable: true,
      sizes: ['12x16', '16x20', '20x24']
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Product Categories
          </h1>
          <p className="text-lg text-gray-600">
            Choose from our wide range of customizable products
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCategories;