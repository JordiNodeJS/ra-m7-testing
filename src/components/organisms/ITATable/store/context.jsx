import { useContext } from 'react'
import { createContext, useMemo, useReducer } from 'react'
import { initialState, tableReducer } from './reducer'

export const TableContext = createContext(initialState)

export default function TableProvider({ children }) {
  const [state, dispatch] = useReducer(tableReducer, initialState)
  const value = useMemo(() => ({ state, dispatch }), [state])
  return <TableContext.Provider value={value}>{children}</TableContext.Provider>
}

// custom hook for useContext(TableContext)
export const useTable = () => useContext(TableContext)