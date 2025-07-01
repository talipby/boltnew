import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

interface AuthContextType {
  auth: AuthState;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState<AuthState>({
    user: null,
    isAuthenticated: false
  });

  const login = async (email: string, password: string): Promise<boolean> => {
    // Demo authentication - replace with real authentication
    if (email === 'admin@koroglukuruyemis.com' && password === 'admin123') {
      const user: User = {
        id: '1',
        email: 'admin@koroglukuruyemis.com',
        role: 'admin',
        firstName: 'Admin',
        lastName: 'User'
      };
      setAuth({ user, isAuthenticated: true });
      return true;
    }
    return false;
  };

  const logout = () => {
    setAuth({ user: null, isAuthenticated: false });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};