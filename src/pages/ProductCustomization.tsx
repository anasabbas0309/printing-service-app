import React, { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { Upload, Type, Palette, Download, ShoppingCart } from 'lucide-react';
import { addToCart } from '../store/cartSlice';
import { Product, CartItem } from '../types';

const ProductCustomization: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [customText, setCustomText] = useState('');
  const [textColor, setTextColor] = useState('#000000');
  const [fontSize, setFontSize] = useState(24);
  const [quantity, setQuantity] = useState(1);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  // Mock product data - in real app, fetch from API
  const product: Product = {
    id: productId || '1',
    name: 'Custom T-Shirt',
    category: 'Apparel',
    basePrice: 599,
    image: '/api/placeholder/400/400',
    description: 'High-quality custom printed t-shirt',
    customizable: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Navy', 'Red', 'Green']
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            setUploadedImages(prev => [...prev, e.target!.result as string]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: `${product.id}-${Date.now()}`,
      product,
      quantity,
      customization: {
        text: customText,
        images: uploadedImages,
        size: selectedSize,
        color: selectedColor
      },
      totalPrice: product.basePrice * quantity
    };
    
    dispatch(addToCart(cartItem));
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Preview Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Live Preview</h2>
            <div className="relative bg-gray-100 rounded-lg p-8 min-h-96 flex items-center justify-center">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-full max-h-80 object-contain"
                  style={{ filter: selectedColor === 'Black' ? 'brightness(0.3)' : 'none' }}
                />
                
                {/* Text Overlay */}
                {customText && (
                  <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    style={{
                      color: textColor,
                      fontSize: `${fontSize}px`,
                      fontWeight: 'bold',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                    }}
                  >
                    {customText}
                  </div>
                )}
                
                {/* Image Overlays */}
                {uploadedImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Upload ${index + 1}`}
                    className="absolute top-4 right-4 w-16 h-16 object-cover rounded border-2 border-white shadow"
                    style={{ transform: `translateX(${index * -70}px)` }}
                  />
                ))}
              </div>
            </div>
            
            <canvas
              ref={canvasRef}
              className="hidden"
              width={400}
              height={400}
            />
          </div>

          {/* Customization Panel */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="text-2xl font-bold text-primary-600 mb-6">
              ₹{product.basePrice * quantity}
            </div>

            {/* Size Selection */}
            {product.sizes && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Size
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-md ${
                        selectedSize === size
                          ? 'border-primary-500 bg-primary-50 text-primary-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {product.colors && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Color
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border rounded-md ${
                        selectedColor === color
                          ? 'border-primary-500 bg-primary-50 text-primary-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Text Customization */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Type className="inline w-4 h-4 mr-1" />
                Custom Text
              </label>
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Enter your custom text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              
              <div className="mt-2 flex gap-4">
                <div className="flex-1">
                  <label className="block text-xs text-gray-500 mb-1">Text Color</label>
                  <input
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="w-full h-8 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-xs text-gray-500 mb-1">Font Size</label>
                  <input
                    type="range"
                    min="12"
                    max="48"
                    value={fontSize}
                    onChange={(e) => setFontSize(Number(e.target.value))}
                    className="w-full"
                  />
                  <span className="text-xs text-gray-500">{fontSize}px</span>
                </div>
              </div>
            </div>

            {/* Image Upload */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Upload className="inline w-4 h-4 mr-1" />
                Upload Images
              </label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              {uploadedImages.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {uploadedImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Upload ${index + 1}`}
                      className="w-16 h-16 object-cover rounded border"
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity
              </label>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                >
                  -
                </button>
                <span className="text-lg font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize || !selectedColor}
                className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </button>
              
              <button className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Download Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCustomization;