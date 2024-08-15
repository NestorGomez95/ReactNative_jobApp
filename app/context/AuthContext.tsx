import React, { createContext, useState, useContext } from 'react';
import { firebase } from '../config/firebaseconfig';

interface AuthContextProps {
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signIn = async (email: string, password: string) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Sign in error:', error);
      throw new Error('Invalid credentials');
    }
  };

  const logout = async () => {
    try {
      await firebase.auth().signOut();
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  console.log('AuthProvider rendered');

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  console.log('useAuth context:', context);
  return context;
};
