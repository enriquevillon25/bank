import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useEffect, useState} from 'react';

export const useAuth = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [token, setToken] = useState<any>('');
  const handlePassword = (value: string) => {
    setPassword(value);
  };
  const handleEmail = (value: string) => {
    setEmail(value);
  };

  const sendLogin = () => {
    axios
      .post('http://localhost:3000/api/login', {
        username: 'user123',
        password: '123456',
      })
      .then(response => {
        setToken(response.data.token);
        AsyncStorage.setItem('token', response.data.token);
      });
  };
  useEffect(() => {
    const jwtToken = AsyncStorage.getItem('token');
    if (jwtToken) {
      setToken(jwtToken);
    }
  }, []);

  return {email, password, handlePassword, handleEmail, token, sendLogin};
};
