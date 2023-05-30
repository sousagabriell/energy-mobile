import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-native-paper'
import { StatusBar } from 'expo-status-bar'
import { AuthProvider } from './src/hooks/auth'
import { SheetProvider } from './src/hooks/sheet'
import { Routes } from './src/routes'
import { theme } from './src/core/theme'
import { ConnectProvider } from './src/hooks/connect'
import { QueueProvider } from './src/provider/queue'

export default function App() {
  return (
    <Provider theme={theme}>
      <AuthProvider>
        <ConnectProvider>
          <SheetProvider>
            <QueueProvider>
              <Routes />
            </QueueProvider>
          </SheetProvider>
        </ConnectProvider>
      </AuthProvider>
      <StatusBar style="auto" />
    </Provider>
  )
}
