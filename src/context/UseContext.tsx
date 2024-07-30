import React, {useEffect, useState} from 'react';
import {createContext} from 'react';
import {useAuth} from '../hooks/useAuth';

export const UserContext = createContext({token: '', sendLogin: () => {}});
export const UserProvider = ({children}: any) => {
  const {sendLogin, token} = useAuth();
  return (
    <UserContext.Provider value={{token, sendLogin}}>
      {children}
    </UserContext.Provider>
  );
};
