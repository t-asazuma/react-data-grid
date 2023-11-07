import React, {FC, ReactNode} from 'react'

interface BaseComponentProps {
  className?: string
  style?: React.CSSProperties
  children: ReactNode
}

export const BaseComponent: FC<BaseComponentProps> = ({className, style, children}) => {
  return (<div className={className} style={style}>{children}</div>)
}
