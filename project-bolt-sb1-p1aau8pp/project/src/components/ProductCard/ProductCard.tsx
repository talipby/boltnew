import React from 'react';
import { ShoppingCart, Eye, Star } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.featured && (
          <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            ÖNE ÇIKAN
          </div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-3">
            <button
              onClick={() => onQuickView?.(product)}
              className="bg-white text-gray-800 p-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Eye className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="flex items-center mb-3">
          <span className="text-sm text-orange-600 font-bold bg-orange-50 px-3 py-1 rounded-full">
            {product.category}
          </span>
          <div className="ml-auto flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 ml-1 font-medium">4.8</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
          {product.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-orange-600">
              ₺{product.price}
            </span>
            <span className="text-gray-500 text-sm ml-1">/{product.unit}</span>
          </div>
          <div className="text-sm text-gray-500 font-medium">
            Min. {product.minOrder} {product.unit}
          </div>
        </div>

        {/* Stock Status */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className={`w-3 h-3 rounded-full mr-2 ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
            <span className={`text-sm font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
              {product.inStock ? 'STOKTA' : 'STOK YOK'}
            </span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`w-full py-3 px-4 rounded-full font-bold transition-all duration-200 flex items-center justify-center space-x-2 ${
            product.inStock
              ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-xl'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <ShoppingCart className="w-5 h-5" />
          <span>SEPETE EKLE</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;