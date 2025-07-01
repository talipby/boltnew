import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <ShoppingBag className="w-20 h-20 text-gray-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              SEPETİNİZ BOŞ
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Henüz sepetinize ürün eklemediniz. Alışverişe başlamak için ürünlerimizi inceleyin.
            </p>
            <Link
              to="/products"
              className="bg-orange-500 text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-colors inline-flex items-center shadow-lg"
            >
              ÜRÜNLERİ İNCELE
              <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-12">SEPETİM</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg">
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-6">
                    SEPETİNİZDEKİ ÜRÜNLER ({state.items.length})
                  </h2>
                  
                  <div className="space-y-6">
                    {state.items.map((item) => (
                      <div key={item.product.id} className="flex items-center space-x-6 p-6 border border-gray-200 rounded-xl">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-gray-900">
                            {item.product.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {item.product.category}
                          </p>
                          <p className="text-xl font-bold text-orange-600">
                            ₺{item.product.price} / {item.product.unit}
                          </p>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-2 text-gray-600 hover:text-gray-800 bg-gray-100 rounded-full"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          
                          <span className="w-16 text-center font-bold text-lg">
                            {item.quantity}
                          </span>
                          
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-2 text-gray-600 hover:text-gray-800 bg-gray-100 rounded-full"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <div className="text-right">
                          <p className="font-bold text-xl text-gray-900">
                            ₺{(item.product.price * item.quantity).toFixed(2)}
                          </p>
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="text-red-600 hover:text-red-800 mt-3 p-2"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-4">
                <h2 className="text-2xl font-bold mb-6">SİPARİŞ ÖZETİ</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-lg">
                    <span>Ara Toplam:</span>
                    <span>₺{state.total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span>KDV (%18):</span>
                    <span>₺{(state.total * 0.18).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span>Kargo:</span>
                    <span className="text-orange-600 font-bold">
                      {state.total > 500 ? 'ÜCRETSİZ' : '₺50.00'}
                    </span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-bold text-2xl">
                      <span>TOPLAM:</span>
                      <span>
                        ₺{(state.total * 1.18 + (state.total > 500 ? 0 : 50)).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                
                {state.total < 500 && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
                    <p className="text-sm text-yellow-700 font-medium">
                      ₺{(500 - state.total).toFixed(2)} daha alışveriş yaparak 
                      ücretsiz kargo fırsatından yararlanın!
                    </p>
                  </div>
                )}
                
                <Link
                  to="/checkout"
                  className="w-full bg-orange-500 text-white py-4 px-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-colors flex items-center justify-center shadow-lg mb-4"
                >
                  SİPARİŞİ TAMAMLA
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Link>
                
                <Link
                  to="/products"
                  className="w-full border-2 border-orange-500 text-orange-500 py-4 px-4 rounded-full font-bold text-lg hover:bg-orange-500 hover:text-white transition-colors text-center block"
                >
                  ALIŞVERİŞE DEVAM ET
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;