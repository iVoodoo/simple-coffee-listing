import React from 'react'

import styles from './section.module.scss'

export const Section: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <section className={styles.section}>{children}</section>
}
