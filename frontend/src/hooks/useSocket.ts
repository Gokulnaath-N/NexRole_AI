import { useEffect, useRef } from 'react'
import { io, Socket } from 'socket.io-client'
import { API_URL } from '../utils/constants'

export function useSocket(userId?: string) {
  const socketRef = useRef<Socket | null>(null)

  useEffect(() => {
    if (!userId) return
    socketRef.current = io(API_URL, { transports: ['websocket'] })
    socketRef.current.emit('join-user-room', userId)
    return () => { socketRef.current?.disconnect() }
  }, [userId])

  return socketRef.current
}