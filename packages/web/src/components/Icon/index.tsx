import { FC } from 'react'
import { IconName } from 'boxicons'

interface IconProps {
  name: IconName
  size?: string
  className?: string
}

const Icon: FC<IconProps> = ({ name, size = '24px', className }) => {
  return (
    <i className={`bx ${name} ${className || ''}`} style={{ fontSize: size }} />
  )
}

export default Icon
