import React from 'react'
import styles from './Footer.module.sass'

export default function Footer() {
  return (
    <div className={`${styles.footer}`}>
      <div className={`${styles.footer__container} container`}>Все права защищены</div>
    </div>
  )
}
