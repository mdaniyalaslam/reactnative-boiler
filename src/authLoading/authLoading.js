import React, {useState} from 'react';
import {AuthContext} from '../context/context';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../screens/Login';
import Drawer from '../navigation/Drawer';

export default function AuthLoading() {
  const [userToken, setUserToken] = useState(null);

  // Using Context Memory for Login Authentication
  const authContext = React.useMemo(() => ({
    login: () => {
      setUserToken('Hello');
    },
  }));

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken === null ? <Login /> : <Drawer />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
