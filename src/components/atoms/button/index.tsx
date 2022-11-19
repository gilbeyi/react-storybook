import React, { ComponentProps } from 'react'

type Props = ComponentProps<'button'>

export const Button = ({children, onClick}: Props) => {
  return <button onClick={onClick}>{children}</button>
}
