import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthRoutes } from './auth.routes';
import { useAuth } from '../hooks/auth';
import { DetailRoutes } from './detail.routes';
import { RecoilRoot } from 'recoil';



export function Routes() {
  const { user } = useAuth();
  return (
    <RecoilRoot>
        <NavigationContainer>
          {user.email ? <DetailRoutes /> : <AuthRoutes />}
        </NavigationContainer>

    </RecoilRoot>

  );
}
