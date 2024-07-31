import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {AuthService} from '../core/services/AuthService';

export const useAuth = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [token, setToken] = useState<any>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const authService = new AuthService();
  const handlePassword = (value: string) => {
    setPassword(value);
  };
  const handleEmail = (value: string) => {
    setEmail(value);
  };

  const sendLogin = async () => {
    try {
      const response = await authService.login({
        username: 'user123456',
        password: '123456',
      });
      setIsLoading(true);
      AsyncStorage.setItem('token', token);
      setToken(response.token);
    } catch (e) {
      return e;
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    const jwtToken = AsyncStorage.getItem('token');
    if (jwtToken) {
      setToken(jwtToken);
    }
  }, []);

  return {email, password, handlePassword, handleEmail, token, sendLogin};
};
