import React, {useState, useEffect, useContext, createContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {GET} from '../api';
import {loadUser} from '../actions/User';
import { loadToken } from '../actions/Token';

const authContext = createContext();

export function ProvideAuth({children}) {
  const _auth = useProvideAuth();
  return <authContext.Provider value={_auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  async function checkUser() {
    let token = await AsyncStorage.getItem('@token');
    dispatch(loadToken(token))
    if (token === null) {
      setUser(false);
    } else {
      GET('profile')
        .then((result) => {
          dispatch(loadUser(result.profile));
          setUser(true)
        })
        .catch(() => {
          setUser(false);
        });
    }
  }

  useEffect(() => {
    checkUser();
  }, []);
  return {
    user,
  };
}
