import React, { useState } from 'react'
import styles from './Order.module.sass'
import { FaTrash } from 'react-icons/fa'

export default function Order(props) {


  let orders = props.orders
  let [sum, setSum] = useState(0)

  if (!Array.isArray(orders)) {
    return(
      <div className={styles.order}>
        В Данный момент вы еще не добавили не одного товара, но вы можете это исправить!
      </div>
    )
  }

  orders.forEach(order => {
    sum += order.price
  })

  return (
    <div className={styles.order}>
      <div className={styles.order__wrapper}>
        {
          orders.map(order => { 
            return(
              <div className={styles.order__item} key={order.id}>
                <img className={styles.order__img} src={`./items/${order.img}`} alt="" />
                <p className={styles.order__title}>{order.title}</p>
                <FaTrash className={styles.order__delete} onClick={ () => {props.onDeleteBasket(order.id)}}/>
              </div>
            )
          })
        }
      </div>
      <div className={styles.order__price}>Сумма корзины: {sum} &#x20bd;</div>
    </div>
  )
}
