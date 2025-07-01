import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { state } = useCart();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-100 border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>0212 555 01 23</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>info@koroglukuruyemistoptan.com.tr</span>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>Fatih/İstanbul</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="text-orange-600 font-medium">Ücretsiz Kargo - 500₺ ve Üzeri Alışverişlerde</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-2xl">K</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-orange-600">KOROĞLU</h1>
              <p className="text-sm text-gray-600 font-medium">KURUYEMİŞ TOPTAN</p>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Ürün ara..."
                className="w-full pl-10 pr-4 py-3 border-2 border-orange-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Search Button - Mobile */}
            <button
              onClick={toggleSearch}
              className="md:hidden p-2 text-gray-600 hover:text-orange-600"
            >
              <Search className="w-6 h-6" />
            </button>

            {/* Cart */}
            <Link to="/cart" className="relative p-2 text-gray-600 hover:text-orange-600">
              <ShoppingCart className="w-7 h-7" />
              {state.items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                  {state.items.length}
                </span>
              )}
            </Link>

            {/* User */}
            <Link to="/account" className="p-2 text-gray-600 hover:text-orange-600">
              <User className="w-7 h-7" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-600 hover:text-orange-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="md:hidden mt-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Ürün ara..."
                className="w-full pl-10 pr-4 py-3 border-2 border-orange-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="bg-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="hidden md:flex space-x-8 py-4">
            <Link to="/" className="hover:text-orange-200 font-semibold text-lg transition-colors">
              ANA SAYFA
            </Link>
            <Link to="/products" className="hover:text-orange-200 font-semibold text-lg transition-colors">
              ÜRÜNLER
            </Link>
            <Link to="/about" className="hover:text-orange-200 font-semibold text-lg transition-colors">
              HAKKIMIZDA
            </Link>
            <Link to="/contact" className="hover:text-orange-200 font-semibold text-lg transition-colors">
              İLETİŞİM
            </Link>
            <Link to="/bulk-pricing" className="hover:text-orange-200 font-semibold text-lg transition-colors">
              TOPTAN FİYATLAR
            </Link>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              <Link to="/" className="block py-3 text-white hover:text-orange-200 font-semibold text-lg">
                ANA SAYFA
              </Link>
              <Link to="/products" className="block py-3 text-white hover:text-orange-200 font-semibold text-lg">
                ÜRÜNLER
              </Link>
              <Link to="/about" className="block py-3 text-white hover:text-orange-200 font-semibold text-lg">
                HAKKIMIZDA
              </Link>
              <Link to="/contact" className="block py-3 text-white hover:text-orange-200 font-semibold text-lg">
                İLETİŞİM
              </Link>
              <Link to="/bulk-pricing" className="block py-3 text-white hover:text-orange-200 font-semibold text-lg">
                TOPTAN FİYATLAR
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;