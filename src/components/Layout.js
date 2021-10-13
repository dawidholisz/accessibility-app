import React from 'react'
import classnames from 'classnames'
import { useContrast } from 'contexts/ContastContext'

const Layout = ({children}) => {
  const {isHighContrastMode} = useContrast()

  return (<div className={classnames('app-container', {'-high':isHighContrastMode})}>
    {children}
  </div>)
}

export default Layout
