import React, { useState } from 'react'
import styles from './Header.module.sass'
import {FaShoppingCart} from "react-icons/fa"
import Order from '../Orders/Order'

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)
  return (
    <header className={styles.header}>
      <div className={`${styles.header__container} container`}>
        <div>
          <span className={styles.header__logo}>Shop</span>
        </div>
        <ul className={styles.header__items}>
          <div className={styles.header__basketLogoWrapper}>
            <div className={styles.header__basketCount}>{props.orders.length}</div>
            <FaShoppingCart className={`${styles.header__basketLogo} ${cartOpen ? 'active-basket' : 'passive-bakset'}`} onClick={() => setCartOpen(cartOpen = !cartOpen)}/>
            </div>
          <li className={styles.header__item}><a href="#" className={styles.header__link}>О нас</a></li>
          <li className={styles.header__item}><a href="#" className={styles.header__link}>Личный кабинет</a></li>
          <li className={styles.header__item}><a href="#" className={styles.header__link}>Корзина</a></li>
        </ul>
        {
            cartOpen && (
              <Order orders={props.orders} onDeleteBasket={props.onDelete}/>
            )
        } 
      </div>
    </header>
  )
}
