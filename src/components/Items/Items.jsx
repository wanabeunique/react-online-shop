import React, { Component } from 'react'
import styles from './Items.module.sass'
import Item from '../Item/Item'

export class Items extends Component {
  render() {
    return (
      <div className={styles.items}>
        <div className={`container ${styles.items__container}`}>
          {this.props.items.map(el => {
              return(
                <Item key={el.id} params={el} onAdd={this.props.onAdd}/>
              )
              })
          }
        </div>
      </div>
    )
  }
}

export default Items