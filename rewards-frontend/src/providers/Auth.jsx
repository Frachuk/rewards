import { createContext, useContext, useMemo, useState } from 'react';
import FetchService from '../services/fetch';

const AuthContext = createContext();

const getDataFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const useAuth = () => useContext(AuthContext);

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const accountDataKey = 'accountData';
  const [accountData, setAccountData] = useState(getDataFromLocalStorage(accountDataKey) || {});

  const login = async (body) => {
    try {
      const { data, status } = await FetchService.post(body, 'login');
      const [responseData] = data || [];
      const accountData = {
        ...responseData,
        status,
      };

      localStorage.setItem(accountDataKey, JSON.stringify(accountData));
      setAccountData(accountData);
    } catch (error) {
      console.error('Login failed:', error);
      setAccountData({});
    }
  };

  const logout = () => {
    localStorage.removeItem(accountDataKey);
    setAccountData({});
  };

  const obj = useMemo(() => ({ login, logout, accountData, setAccountData }), [accountData]);

  return <AuthContext.Provider value={obj}>{children}</AuthContext.Provider>;
};
