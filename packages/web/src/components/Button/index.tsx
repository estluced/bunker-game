import { ButtonHTMLAttributes } from 'react'
import './syles.css'

export interface ButtonProps extends ButtonHTMLAttributes<string> {
  variant?: 'primary' | 'outline' | 'icon'
}

const Button = ({
  variant = 'primary',
  className,
  ...buttonProps
}: ButtonProps) => {
  return (
    <button
      {...buttonProps}
      className={`btn-base btn-${variant} ${className || ''}`}
    />
  )
}

export default Button
