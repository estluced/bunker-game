import {
  ChangeEventHandler,
  InputHTMLAttributes,
  useCallback,
  useState,
} from 'react'
import './styles.css'
import Button from '@/components/Button'
import Icon from '@/components/Icon'

export interface TextFieldProps extends InputHTMLAttributes<string> {
  label?: string
  variant?: 'primary'
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const TextField = ({
  variant = 'primary',
  className,
  label,
  onChange,
  ...inputProps
}: TextFieldProps) => {
  const [type, setType] = useState(inputProps.type)

  const handleTogglePassword = useCallback(() => {
    setType(type === 'password' ? 'text' : 'password')
  }, [type])

  if (inputProps.type === 'password') {
    return (
      <div className="relative flex items-center">
        <input
          {...inputProps}
          type={type}
          onChange={onChange}
          className={`input-base w-full pr-9 input-${variant} ${className || ''}`}
        />
        <Button
          type="button"
          className="absolute right-2"
          variant="icon"
          onClick={handleTogglePassword}
        >
          <Icon
            size="18px"
            name={type === 'password' ? 'bx-hide' : 'bx-show'}
          />
        </Button>
      </div>
    )
  }

  return (
    <input
      {...inputProps}
      type={type}
      onChange={onChange}
      className={`input-base input-${variant} ${className || ''}`}
    />
  )
}

export default TextField
