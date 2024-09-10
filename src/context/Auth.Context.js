import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { base } from '../utils/api';
import { showMessage } from 'react-native-flash-message';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Error checking auth status:', error);
    }
  };

  const handleAuth = useCallback(async (endpoint, params, type) => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post(endpoint, params, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        if (type === "login") {
          await AsyncStorage.setItem('user', JSON.stringify(response.data.data));
          setUser(response.data.data);
          setIsAuthenticated(true);
          showMessage({
            message: 'Login successful!',
            type: 'success',
          });
        } else if (type === "register") {
          showMessage({
            message: 'Registration successful! Please log in.',
            type: 'success',
          });
        }
        return true;
      } else {
        throw new Error(response.data.message || 'Authentication failed');
      }
    } catch (error) {
      setError(error.message || 'An unexpected error occurred');
      showMessage({
        message: error.message || 'Authentication failed',
        type: 'danger',
      });
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  const login = useCallback((params) => handleAuth(base.login, params, "login"), [handleAuth]);
  const register = useCallback((params) => handleAuth(base.signup, params, "register"), [handleAuth]);

  const logout = useCallback(async () => {
    setLoading(true);
    try {
      await AsyncStorage.removeItem('user');
      setIsAuthenticated(false);
      setUser(null);
      showMessage({
        message: 'Logout successful',
        type: 'success',
      });
    } catch (error) {
      setError('Logout failed');
      showMessage({
        message: 'Logout failed',
        type: 'danger',
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const value = {
    isAuthenticated,
    loading,
    error,
    user,
    login,
    register,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};