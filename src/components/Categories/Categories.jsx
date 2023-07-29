import React, { useState, useEffect } from 'react';
import styles from './Categories.module.sass';

export default function Categories(props) {
  const categories = [
    { key: 'all', name: 'Всё' },
    { key: 'clothes', name: 'Одежда' },
    { key: 'technic', name: 'Техника' },
    { key: 'self-care', name: 'Уход за собой' },
    { key: 'games', name: 'Развлечения' },
    { key: 'books', name: 'Книги' }
  ];

  const [currentCategories, setCurrentCategories] = useState(props.categoriesValue);
  useEffect(() => {
    // Обновляем состояние currentCategories, когда props.categoriesValue меняется
    setCurrentCategories(props.categoriesValue);
  }, [props.categoriesValue]);

  return (
    <div className='container'>
      <div>
        <div className={styles.categories}>
          Категории товаров:
          {categories.map(el => (
            <div className={styles.categories__item} key={el.key} onClick={() => props.categories(el.key)}>
              {el.name}
            </div>
          ))}
        </div>
        <div className={styles.categories__currentWrapper}>
          Выбранные категории:
          <div className={styles.categories__current}>
          {currentCategories.map(el => {
            let current = null
            categories.forEach(item => {
              if (item.key == el){
                current = item
              }
            })
            return(
            <div className={styles.categories__currentTitle} key={current.key}>{current.name}</div>
            )
          })}
          </div>
        </div>
      </div>
    </div>
  );
}