import React, { createContext, useContext, useState, useCallback, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useConnect } from '../hooks/connect'
import { useAuth } from '../hooks/auth'
import { api } from '../services/api'

export const QueueContext = createContext({})

export const QueueProvider = ({ children }) => {
  const offQueueKey = '@energycode:offQueeu'
  const { isConnected } = useConnect()
  const { userHeaders } = useAuth()
  const [queue, setQueue] = useState([])

  const headers = userHeaders()

  const addToQueue = async (data) => {
    setQueue((prevState) => [...prevState, data])
    try {
      await AsyncStorage.setItem(offQueueKey, JSON.stringify(queue))
    } catch (error) {
      throw new Error(String(error.code));
    }
  }

  const deleteQueueStorage = useCallback(async () => {
    setQueue([])
    await AsyncStorage.removeItem(offQueueKey)
  }, [])

  useEffect(() => {
    if (isConnected && queue.length > 0) {
      queue.forEach(async (item) => {
        try {
          const response = await api.post(item.url, item.body, { headers })
          if (response.data.success) {
            const storedQueue = await AsyncStorage.getItem(offQueueKey)
            const parsedQueue = storedQueue ? JSON.parse(storedQueue) : []
            const filteredQueue = parsedQueue.filter(
              (storedItem) => storedItem.body.dataRow !== item.body.dataRow
            )
            await AsyncStorage.setItem(offQueueKey, JSON.stringify(filteredQueue))
            setQueue((prev) => filteredQueue)
          }
        } catch (error) {
          console.log(error)
          throw new Error(String(error.code));
        }
      })
    }
  }, [isConnected])

  return <QueueContext.Provider value={{ queue, addToQueue }}>{children}</QueueContext.Provider>
}

export const useQueue = () => useContext(QueueContext)
