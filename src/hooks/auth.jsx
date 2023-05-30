import React, { useState, createContext, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { invalidPassword } from '../core/utils';
import { api } from '../services/api';
const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [useStorageLoading, setUserStorageLoading] = useState(true);
  const userStorageKey = '@energycode:user';

  async function saveData(userLogged) {
    await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged));
  }

  async function signOut() {
    await AsyncStorage.removeItem(userStorageKey);
    setUser({});
  }

  const userHeaders = () => {
    return {Authorization: `Bearer ${user.token}`}
  }


  async function signIn(body) {
    try {
      const response = await api.post('login/', body,)
      const userLogged = {
        email: response.data.email,
        token: response.data.token,
      };
      api.defaults.headers.Authorization = `Bearer ${userLogged.token}`
      saveData(userLogged);
      setUser(userLogged);
      return userLogged;
    } catch (error) {
      throw new Error(String(error.code));
    }
  }

  useEffect(() => {
    // console.log('useEffect!')
    async function loadUserStorageDate() {
      const userStorage = await AsyncStorage.getItem(userStorageKey);
      if (userStorage) {
        const userLogged = JSON.parse(userStorage);
        setUser(userLogged);
      }
      setUserStorageLoading(false);
    }
    loadUserStorageDate();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, signIn, signOut, useStorageLoading, userHeaders }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
