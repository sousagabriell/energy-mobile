import React, { createContext, useContext, useEffect, useState } from 'react'
import NetInfo from '@react-native-community/netinfo'

const ConnectContext = createContext({})

const ConnectProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(null)

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
      setIsConnected(state.isInternetReachable)
    })
    return () => removeNetInfoSubscription()
  }, [])
  return <ConnectContext.Provider value={{ isConnected }}>{children}</ConnectContext.Provider>
}

function useConnect() {
  const context = useContext(ConnectContext)
  return context
}

export { ConnectProvider, useConnect }
