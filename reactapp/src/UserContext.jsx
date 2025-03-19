import { createContext, useContext } from 'react';

export const UserContext = createContext(null);

export function UserProvider({ children, saveUser, editingUser }) {
  return (
    <UserContext.Provider value={{ saveUser, editingUser }}>
      {children}
    </UserContext.Provider>
  );
}