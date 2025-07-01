import React, { useState } from 'react';
import { 
  BarChart3, 
  Package, 
  ShoppingCart, 
  Users, 
  TrendingUp, 
  DollarSign,
  Plus,
  Edit,
  Trash2,
  Eye
} from 'lucide-react';
import { products } from '../../data/products';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for dashboard
  const stats = {
    totalOrders: 1247,
    totalRevenue: 156780,
    totalProducts: products.length,
    totalCustomers: 834
  };

  const recentOrders = [
    { id: '1001', customer: 'Ahmet Kaya', total: 1250, status: 'confirmed', date: '2024-01-15' },
    { id: '1002', customer: 'Fatma Demir', total: 890, status: 'pending', date: '2024-01-15' },
    { id: '1003', customer: 'Mehmet Öz', total: 2100, status: 'shipped', date: '2024-01-14' },
    { id: '1004', customer: 'Ayşe Yılmaz', total: 670, status: 'delivered', date: '2024-01-14' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'confirmed': return 'text-blue-600 bg-blue-100';
      case 'shipped': return 'text-purple-600 bg-purple-100';
      case 'delivered': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'Bekliyor';
      case 'confirmed': return 'Onaylandı';
      case 'shipped': return 'Kargoda';
      case 'delivered': return 'Teslim Edildi';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">ADMİN DASHBOARD</h1>
              <p className="text-lg text-gray-600">Koroğlu Kuruyemiş Yönetim Paneli</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Son güncelleme: 15 Ocak 2024</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', name: 'GENEL BAKIŞ', icon: BarChart3 },
              { id: 'products', name: 'ÜRÜN YÖNETİMİ', icon: Package },
              { id: 'orders', name: 'SİPARİŞ YÖNETİMİ', icon: ShoppingCart },
              { id: 'customers', name: 'MÜŞTERİ YÖNETİMİ', icon: Users },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-3 px-6 rounded-full font-bold transition-colors ${
                  activeTab === tab.id
                    ? 'bg-orange-100 text-orange-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <ShoppingCart className="h-10 w-10 text-blue-600" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        TOPLAM SİPARİŞ
                      </dt>
                      <dd className="text-2xl font-bold text-gray-900">
                        {stats.totalOrders.toLocaleString()}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <DollarSign className="h-10 w-10 text-green-600" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        TOPLAM CİRO
                      </dt>
                      <dd className="text-2xl font-bold text-gray-900">
                        ₺{stats.totalRevenue.toLocaleString()}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Package className="h-10 w-10 text-purple-600" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        TOPLAM ÜRÜN
                      </dt>
                      <dd className="text-2xl font-bold text-gray-900">
                        {stats.totalProducts}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Users className="h-10 w-10 text-orange-600" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        TOPLAM MÜŞTERİ
                      </dt>
                      <dd className="text-2xl font-bold text-gray-900">
                        {stats.totalCustomers}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-2xl shadow-lg">
              <div className="px-8 py-6 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900">SON SİPARİŞLER</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        SİPARİŞ NO
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        MÜŞTERİ
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        TOPLAM
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        DURUM
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        TARİH
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        İŞLEMLER
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentOrders.map((order) => (
                      <tr key={order.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                          #{order.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {order.customer}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ₺{order.total}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-bold rounded-full ${getStatusColor(order.status)}`}>
                            {getStatusText(order.status)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {order.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-900">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="text-orange-600 hover:text-orange-900">
                              <Edit className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">ÜRÜN YÖNETİMİ</h2>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors flex items-center space-x-2 font-bold">
                <Plus className="w-5 h-5" />
                <span>YENİ ÜRÜN EKLE</span>
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        ÜRÜN
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        KATEGORİ
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        FİYAT
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        STOK
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        İŞLEMLER
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {products.slice(0, 10).map((product) => (
                      <tr key={product.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <img
                              className="h-12 w-12 rounded-lg object-cover"
                              src={product.image}
                              alt={product.name}
                            />
                            <div className="ml-4">
                              <div className="text-sm font-bold text-gray-900">
                                {product.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {product.category}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ₺{product.price} / {product.unit}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-bold rounded-full ${
                            product.inStock 
                              ? 'text-green-800 bg-green-100' 
                              : 'text-red-800 bg-red-100'
                          }`}>
                            {product.inStock ? 'STOKTA' : 'STOK YOK'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-900">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="text-orange-600 hover:text-orange-900">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">SİPARİŞ YÖNETİMİ</h2>
              <div className="flex space-x-2">
                <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium">
                  <option>TÜM DURUMLAR</option>
                  <option>BEKLİYOR</option>
                  <option>ONAYLANDI</option>
                  <option>KARGODA</option>
                  <option>TESLİM EDİLDİ</option>
                </select>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        SİPARİŞ NO
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        MÜŞTERİ
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        TOPLAM
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        DURUM
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        TARİH
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        İŞLEMLER
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentOrders.map((order) => (
                      <tr key={order.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                          #{order.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {order.customer}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ₺{order.total}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <select 
                            className={`text-xs font-bold rounded-full px-2 py-1 border-0 ${getStatusColor(order.status)}`}
                            defaultValue={order.status}
                          >
                            <option value="pending">BEKLİYOR</option>
                            <option value="confirmed">ONAYLANDI</option>
                            <option value="shipped">KARGODA</option>
                            <option value="delivered">TESLİM EDİLDİ</option>
                          </select>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {order.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-900">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="text-orange-600 hover:text-orange-900">
                              <Edit className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Customers Tab */}
        {activeTab === 'customers' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">MÜŞTERİ YÖNETİMİ</h2>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors font-bold">
                MÜŞTERİ LİSTESİNİ DIŞA AKTAR
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-12">
              <div className="text-center text-gray-500">
                <Users className="w-16 h-16 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">MÜŞTERİ YÖNETİMİ</h3>
                <p className="text-lg">Müşteri listesi ve detayları burada görüntülenecek.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;