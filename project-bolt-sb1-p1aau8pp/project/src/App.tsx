import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Cart from './pages/Cart/Cart';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminDashboard from './pages/Admin/AdminDashboard';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { auth } = useAuth();
  return auth.isAuthenticated && auth.user?.role === 'admin' ? (
    <>{children}</>
  ) : (
    <Navigate to="/admin/login" />
  );
};

const AdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { auth } = useAuth();
  return auth.isAuthenticated && auth.user?.role === 'admin' ? (
    <Navigate to="/admin" />
  ) : (
    <>{children}</>
  );
};

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            {/* Main Website Routes */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="cart" element={<Cart />} />
              <Route path="about" element={<div className="p-8 text-center">Hakkımızda sayfası yakında...</div>} />
              <Route path="contact" element={<div className="p-8 text-center">İletişim sayfası yakında...</div>} />
              <Route path="bulk-pricing" element={<div className="p-8 text-center">Toptan fiyatlar sayfası yakında...</div>} />
              <Route path="checkout" element={<div className="p-8 text-center">Ödeme sayfası yakında...</div>} />
              <Route path="account" element={<div className="p-8 text-center">Hesap sayfası yakında...</div>} />
            </Route>
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={
              <AdminRoute>
                <AdminLogin />
              </AdminRoute>
            } />
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            
            {/* 404 Route */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;