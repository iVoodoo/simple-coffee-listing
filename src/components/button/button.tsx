import cn from 'clsx'

import styles from './button.module.scss'

interface IButton {
  title: string
  action: () => void
  isPressed: boolean
}

export const Button: React.FC<IButton> = ({ title, action, isPressed }) => {
  return (
    <button
      className={cn(styles.button, {
        [styles['button--active']]: isPressed
      })}
      onClick={action}
      type='button'
    >
      {title}
    </button>
  )
}
