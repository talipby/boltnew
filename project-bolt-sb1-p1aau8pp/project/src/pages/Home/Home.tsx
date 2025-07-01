import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Truck, Award, Users, Star, Phone, CheckCircle } from 'lucide-react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { products } from '../../data/products';

const Home: React.FC = () => {
  const featuredProducts = products.filter(product => product.featured).slice(0, 8);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-400 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                KOROĞLU <br />
                <span className="text-yellow-300">KURUYEMİŞ TOPTAN</span>
              </h1>
              <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                1985'ten beri Türkiye'nin en güvenilir kuruyemiş tedarikçisi. 
                Premium kalite, uygun fiyatlar, güvenilir hizmet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/products"
                  className="bg-yellow-400 text-orange-800 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center justify-center shadow-lg"
                >
                  ÜRÜNLER
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Link>
                <Link
                  to="/contact"
                  className="border-3 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition-colors text-center flex items-center justify-center"
                >
                  <Phone className="mr-2 w-6 h-6" />
                  İLETİŞİM
                </Link>
              </div>
              <div className="flex items-center space-x-8 text-lg text-orange-100">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-yellow-300 mr-2" />
                  <span>Kalite Garantisi</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-yellow-300 mr-2" />
                  <span>Hızlı Teslimat</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4109979/pexels-photo-4109979.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Premium Kuruyemiş"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-orange-800 p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">40+</div>
                <div className="text-lg font-semibold">YILLIK TECRÜBE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">ÜRÜN KATEGORİLERİMİZ</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Geniş ürün yelpazemizle tüm kuruyemiş ihtiyaçlarınızı karşılıyoruz
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: 'FISTIK', image: 'https://images.pexels.com/photos/4109979/pexels-photo-4109979.jpeg?auto=compress&cs=tinysrgb&w=300' },
              { name: 'BADEM', image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=300' },
              { name: 'CEVİZ', image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=300' },
              { name: 'FINDIK', image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=300' },
              { name: 'KURU MEYVE', image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=300' },
              { name: 'ÇEKİRDEK', image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=300' }
            ].map((category) => (
              <Link
                key={category.name}
                to={`/products?category=${category.name}`}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group transform hover:-translate-y-2"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-32 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform"
                />
                <h3 className="font-bold text-lg text-gray-800">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">ÖNE ÇIKAN ÜRÜNLER</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              En çok tercih edilen premium kalite kuruyemiş ve kuru meyve çeşitlerimizi keşfedin
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link
              to="/products"
              className="bg-orange-500 text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-colors inline-flex items-center shadow-lg"
            >
              TÜM ÜRÜNLERİ GÖR
              <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">NEDEN KOROĞLU KURUYEMİŞ?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">KALİTE GARANTİSİ</h3>
              <p className="text-gray-600">Tüm ürünlerimiz kalite kontrolünden geçer</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">HIZLI TESLİMAT</h3>
              <p className="text-gray-600">Türkiye geneli 1-3 gün içinde teslimat</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">40+ YIL TECRÜBE</h3>
              <p className="text-gray-600">1985'ten beri güvenilir hizmet</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">10,000+ MÜŞTERİ</h3>
              <p className="text-gray-600">Binlerce memnun müşteri</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-4">40+</div>
              <div className="text-xl text-orange-100">YILLIK TECRÜBE</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-4">10,000+</div>
              <div className="text-xl text-orange-100">MEMNUN MÜŞTERİ</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-4">20+</div>
              <div className="text-xl text-orange-100">ÜRÜN ÇEŞİDİ</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-4">81</div>
              <div className="text-xl text-orange-100">İL'E TESLİMAT</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            TOPTAN ALIM YAPMAYA HAZIR MISINIZ?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Bugün bizimle iletişime geçin ve özel toptan fiyatlarımızdan yararlanın. 
            Uzman ekibimiz size en uygun çözümü sunmaya hazır.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-orange-500 text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg"
            >
              İLETİŞİME GEÇ
            </Link>
            <Link
              to="/bulk-pricing"
              className="border-3 border-orange-500 text-orange-500 px-12 py-4 rounded-full font-bold text-lg hover:bg-orange-500 hover:text-white transition-colors"
            >
              FİYAT LİSTESİ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;