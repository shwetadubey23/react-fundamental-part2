import React, { useContext } from 'react'
import { createContext, useState } from 'react'

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
const [auth, setAuth] = useState({ })
    return (
        <AuthContext.Provider value={{auth: auth, setAuth: setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
  return  useContext(AuthContext)
}
