import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">K</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">KOROĞLU</h3>
                <p className="text-lg text-gray-300">KURUYEMİŞ TOPTAN</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              1985'ten beri kaliteli kuruyemiş tedariki konusunda öncü firmamız, 
              Türkiye'nin dört bir yanına güvenilir hizmet sunmaktadır.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">HIZLI LİNKLER</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white text-lg transition-colors">ANA SAYFA</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white text-lg transition-colors">ÜRÜNLER</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white text-lg transition-colors">HAKKIMIZDA</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white text-lg transition-colors">İLETİŞİM</Link>
              </li>
              <li>
                <Link to="/bulk-pricing" className="text-gray-300 hover:text-white text-lg transition-colors">TOPTAN FİYATLAR</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">KATEGORİLER</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products?category=Fıstık" className="text-gray-300 hover:text-white text-lg transition-colors">FISTIK</Link>
              </li>
              <li>
                <Link to="/products?category=Badem" className="text-gray-300 hover:text-white text-lg transition-colors">BADEM</Link>
              </li>
              <li>
                <Link to="/products?category=Ceviz" className="text-gray-300 hover:text-white text-lg transition-colors">CEVİZ</Link>
              </li>
              <li>
                <Link to="/products?category=Kuru Meyve" className="text-gray-300 hover:text-white text-lg transition-colors">KURU MEYVE</Link>
              </li>
              <li>
                <Link to="/products?category=Süper Gıda" className="text-gray-300 hover:text-white text-lg transition-colors">SÜPER GIDA</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">İLETİŞİM</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-orange-400 mt-1" />
                <div>
                  <p className="text-gray-300 text-lg">
                    Atatürk Mahallesi, Kuruyemiş Sokak No:15<br />
                    34xxx Fatih/İstanbul
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-orange-400" />
                <span className="text-gray-300 text-lg">0212 555 01 23</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-orange-400" />
                <span className="text-gray-300 text-lg">info@koroglukuruyemistoptan.com.tr</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-lg">
              © 2024 KOROĞLU KURUYEMİŞ TOPTAN. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-lg transition-colors">
                Gizlilik Politikası
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-lg transition-colors">
                Kullanım Şartları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;