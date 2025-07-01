import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Package, Truck, CheckCircle, Clock } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Order, CartItem } from '../types';

const OrderTracking: React.FC = () => {
  const [searchOrderId, setSearchOrderId] = useState('');
  const orders = useSelector((state: RootState) => state.order.orders);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-6 h-6 text-yellow-500" />;
      case 'processing':
        return <Package className="w-6 h-6 text-blue-500" />;
      case 'shipped':
        return <Truck className="w-6 h-6 text-purple-500" />;
      case 'delivered':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      default:
        return <Clock className="w-6 h-6 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-purple-100 text-purple-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredOrders = orders.filter((order: Order) =>
    searchOrderId === '' || order.id.toLowerCase().includes(searchOrderId.toLowerCase())
  );

  // Mock orders for demonstration - Fixed to match proper types
  const mockOrders: Order[] = [
    {
      id: 'ORD-001',
      items: [
        {
          id: '1',
          product: {
            id: 'prod-1',
            name: 'Business Cards',
            category: 'business',
            basePrice: 299,
            image: '/api/placeholder/100/100',
            description: 'Professional business cards',
            customizable: true
          },
          quantity: 1,
          totalPrice: 299
        }
      ],
      totalAmount: 299,
      status: 'delivered' as const,
      createdAt: '2024-01-15',
      shippingAddress: {
        name: 'John Doe',
        street: '123 Main St',
        city: 'Mumbai',
        state: 'Maharashtra',
        zipCode: '400001',
        phone: '+91 98765 43210'
      }
    },
    {
      id: 'ORD-002',
      items: [
        {
          id: '2',
          product: {
            id: 'prod-2',
            name: 'Custom T-Shirt',
            category: 'apparel',
            basePrice: 599,
            image: '/api/placeholder/100/100',
            description: 'Custom printed t-shirt',
            customizable: true
          },
          quantity: 2,
          totalPrice: 1198
        }
      ],
      totalAmount: 1198,
      status: 'shipped' as const,
      createdAt: '2024-01-18',
      shippingAddress: {
        name: 'Jane Smith',
        street: '456 Oak Ave',
        city: 'Delhi',
        state: 'Delhi',
        zipCode: '110001',
        phone: '+91 87654 32109'
      }
    }
  ];

  const displayOrders = filteredOrders.length > 0 ? filteredOrders : mockOrders;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Track Your Orders
          </h1>
          <p className="text-lg text-gray-600">
            Enter your order ID to track the status of your order
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Enter Order ID (e.g., ORD-001)"
              value={searchOrderId}
              onChange={(e) => setSearchOrderId(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {displayOrders.map((order: Order, index: number) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Order Header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Order #{order.id}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Placed on {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 flex items-center space-x-3">
                    {getStatusIcon(order.status)}
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="px-6 py-4">
                <h4 className="text-md font-medium text-gray-900 mb-3">Items</h4>
                <div className="space-y-3">
                  {order.items.map((item: CartItem, itemIndex: number) => (
                    <div key={itemIndex} className="flex items-center space-x-4">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h5 className="font-medium text-gray-900">{item.product.name}</h5>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                      <div className="text-lg font-semibold text-gray-900">
                        ₹{item.totalPrice}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Total */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-900">Total Amount</span>
                  <span className="text-xl font-bold text-primary-600">₹{order.totalAmount}</span>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="px-6 py-4 border-t border-gray-200">
                <h4 className="text-md font-medium text-gray-900 mb-2">Shipping Address</h4>
                <div className="text-sm text-gray-600">
                  <p>{order.shippingAddress.name}</p>
                  <p>{order.shippingAddress.street}</p>
                  <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}</p>
                  <p>{order.shippingAddress.phone}</p>
                </div>
              </div>

              {/* Progress Timeline */}
              <div className="px-6 py-4 border-t border-gray-200">
                <h4 className="text-md font-medium text-gray-900 mb-4">Order Progress</h4>
                <div className="flex items-center justify-between">
                  {['pending', 'processing', 'shipped', 'delivered'].map((status, statusIndex) => {
                    const isCompleted = ['pending', 'processing', 'shipped', 'delivered'].indexOf(order.status) >= statusIndex;
                    const isCurrent = order.status === status;
                    
                    return (
                      <div key={status} className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          isCompleted ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-400'
                        } ${isCurrent ? 'ring-4 ring-primary-200' : ''}`}>
                          {getStatusIcon(status)}
                        </div>
                        <span className={`mt-2 text-xs ${
                          isCompleted ? 'text-primary-600 font-medium' : 'text-gray-400'
                        }`}>
                          {status.charAt(0).toUpperCase() + status.slice(1)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {displayOrders.length === 0 && searchOrderId && (
          <div className="text-center py-12">
            <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No orders found</h3>
            <p className="text-gray-600">Please check your order ID and try again.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderTracking;