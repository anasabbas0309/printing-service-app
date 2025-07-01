import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Pricing: React.FC = () => {
  const navigate = useNavigate();

  const pricingPlans = [
    {
      name: 'Basic',
      price: '₹99',
      description: 'Perfect for individuals and small projects',
      features: [
        'Up to 5 designs per month',
        'Basic templates',
        'Standard quality printing',
        'Email support',
        '7-day delivery'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '₹299',
      description: 'Ideal for businesses and frequent users',
      features: [
        'Unlimited designs',
        'Premium templates',
        'High-quality printing',
        'Priority support',
        '3-day delivery',
        'Bulk discounts',
        'Custom branding'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '₹999',
      description: 'For large organizations with custom needs',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom integrations',
        'Same-day delivery',
        'Volume pricing',
        'API access',
        'White-label solutions'
      ],
      popular: false
    }
  ];

  const productPricing = [
    { category: 'Business Cards', startingPrice: '₹299', items: '500 cards' },
    { category: 'T-Shirts', startingPrice: '₹599', items: 'per piece' },
    { category: 'Mugs', startingPrice: '₹399', items: 'per piece' },
    { category: 'Flyers', startingPrice: '₹199', items: '100 flyers' },
    { category: 'Letterheads', startingPrice: '₹249', items: '100 sheets' },
    { category: 'Canvas Prints', startingPrice: '₹899', items: 'per piece' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that works best for you. All plans include our core features with no hidden fees.
          </p>
        </div>

        {/* Subscription Plans */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Subscription Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                  plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-primary-600 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-500 font-normal">/month</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => navigate('/categories')}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Product Pricing */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Product Pricing
          </h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
              {productPricing.map((product, index) => (
                <motion.div
                  key={product.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 border-b md:border-r border-gray-200 last:border-b-0 md:last:border-r-0"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {product.category}
                  </h3>
                  <div className="text-2xl font-bold text-primary-600 mb-1">
                    {product.startingPrice}
                  </div>
                  <p className="text-gray-500 text-sm">{product.items}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I change my plan anytime?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you offer bulk discounts?
              </h3>
              <p className="text-gray-600">
                Yes, we offer significant discounts for bulk orders. Contact our sales team for custom pricing on large quantities.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept all major credit cards, debit cards, UPI, net banking, and digital wallets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;