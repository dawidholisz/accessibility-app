import React, { useContext } from 'react'
import {useToggle} from 'react-use'

const ContrastContext = React.createContext({ products: [] })

export const ContrastProvider = ({ children }) => {
   const [isHighContrastMode,toggleContrastMode] = useToggle(true)
  return (
    <ContrastContext.Provider value={{isHighContrastMode,toggleContrastMode}}>
      {children}
    </ContrastContext.Provider>
  )
}

export const useContrast = () => useContext(ContrastContext)
