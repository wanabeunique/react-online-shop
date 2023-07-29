import React from 'react'
import styles from './Item.module.sass'

export default function Item(props) {
  return (
    <div className={styles.item}>
      <img className={styles.item__img} src={`./items/${props.params.img}`} alt="" />
      <p className={`text ${styles.item__title} `}>{props.params.title}</p>
      <p className={`text ${styles.item__price} `}>{props.params.price}&#x20bd;</p>
      <p className={`text ${styles.item__basket} `} onClick={() => props.onAdd(props.params)}>Добавить в корзину</p>
    </div>
  )
}
