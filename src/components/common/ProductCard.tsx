import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
      onClick={() => navigate(`/customize/${product.id}`)}
    >
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover object-center group-hover:opacity-75"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-primary-600">
            ₹{product.basePrice}
          </span>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
        {product.customizable && (
          <div className="mt-2">
            <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">
              Customizable
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProductCard;