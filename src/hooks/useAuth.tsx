import {useState} from 'react';

export const useAuth = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handlePassword = (value: string) => {
    setPassword(value);
  };
  const handleEmail = (value: string) => {
    setEmail(value);
  };

  return {email, password, handlePassword, handleEmail};
};
