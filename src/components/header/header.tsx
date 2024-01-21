import styles from './header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Coffee house</h1>
    </header>
  )
}
