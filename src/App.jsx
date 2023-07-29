import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Items from './components/Items/Items'
import Categories from './components/Categories/Categories'
import { useEffect } from 'react'

function App() {
  let [items, setItems] = useState(
    [
      {
        "id": 1,
        "title": "Ноутбук Lenovo IdeaPad 15",
        "img": "laptop_1.jpg",
        "desc": "Мощный ноутбук с процессором Intel Core i5, 8 ГБ ОЗУ и 512 ГБ SSD.",
        "category": "technic",
        "price": 799.99
      },
      {
        "id": 2,
        "title": "Смартфон Samsung Galaxy S22",
        "img": "phone_1.jpeg",
        "desc": "Смартфон с передовым дисплеем, мощным процессором и качественной камерой.",
        "category": "technic",
        "price": 999.95
      },
      {
        "id": 3,
        "title": "Куртка The North Face Resolve",
        "img": "jacket_1.jpg",
        "desc": "Стойкая к ветру и воде куртка для активного отдыха на открытом воздухе.",
        "category": "clothes",
        "price": 129.50
      },
      {
        "id": 4,
        "title": "Настольная игра Каркассон",
        "img": "boardgame_1.jpg",
        "desc": "Строительство крепостей и замков в этой захватывающей настольной игре.",
        "category": "games",
        "price": 35.75
      },
      {
        "id": 5,
        "title": "Тушь для ресниц Maybelline Lash Sensational",
        "img": "makeup_1.jpeg",
        "desc": "Уникальная тушь для объема и длины ресниц с чашечкой-ресничницей.",
        "category": "self-care",
        "price": 12.30
      },
      {
        "id": 6,
        "title": "Книга \"Властелин колец\" Дж. Р. Р. Толкина",
        "img": "book_1.jpg",
        "desc": "История Средиземья в увлекательной эпической фэнтези-саге.",
        "category": "books",
        "price": 19.99
      },
      {
        "id": 7,
        "title": "Умные наушники Sony WH-1000XM4",
        "img": "headphones_1.jpg",
        "desc": "Отличное звучание, шумоподавление и долгое время работы от аккумулятора.",
        "category": "technic",
        "price": 299.95
      },
      {
        "id": 8,
        "title": "Платье для вечеринки с блестками",
        "img": "dress_1.jpg",
        "desc": "Изящное платье для вечернего мероприятия с блестящими деталями.",
        "category": "clothes",
        "price": 59.50
      },
      {
        "id": 9,
        "title": "Конструктор LEGO Star Wars Millennium Falcon",
        "img": "lego_1.jpg",
        "desc": "Знаменитый звездный корабль из вселенной Звездных войн.",
        "category": "games",
        "price": 79.99
      },
      {
        "id": 10,
        "title": "Палитра теней для век Anastasia Beverly Hills",
        "img": "eyeshadow_1.jpeg",
        "desc": "Качественная палитра с различными оттенками для создания разнообразных макияжей.",
        "category": "self-care",
        "price": 45.50
      },
      {
        "id": 11,
        "title": "Книга \"1984\" Джорджа Оруэлла",
        "img": "book_2.jpg",
        "desc": "Известный антиутопический роман о контроле и манипуляции.",
        "category": "books",
        "price": 15.99
      },
      {
        "id": 12,
        "title": "4K Телевизор LG OLED55C1",
        "img": "tv_1.jpg",
        "desc": "Современный телевизор с качеством изображения 4K OLED.",
        "category": "technic",
        "price": 1299.95
      },
      {
        "id": 13,
        "title": "Джинсы Levi's 501",
        "img": "jeans_1.jpeg",
        "desc": "Легендарные джинсы с идеальной посадкой и классическим дизайном.",
        "category": "clothes",
        "price": 89.75
      },
      {
        "id": 14,
        "title": "Набор для лепки Play-Doh",
        "img": "playdoh_1.jpg",
        "desc": "Развивающий и веселый набор для детской лепки.",
        "category": "games",
        "price": 10.50
      },
      {
        "id": 15,
        "title": "Помада MAC Satin Lipstick",
        "img": "lipstick_1.jpg",
        "desc": "Изысканная помада с матовым финишем и стойкими оттенками.",
        "category": "self-care",
        "price": 25.99
      },
    ]
  )
  let [orders, setOrders] = useState('')
  let [categories, setCategories] = useState(['all'])
  let [currentItems, setCurrentItems] = useState(items)

  function addToBasket(item){
    let isInArray = false
    if (orders){
      orders.forEach(order => {
        if (order.id == item.id){
          isInArray = true
        }
      })
    }
    if (!isInArray){
      setOrders([...orders, item])
    }
    
  }

  function onDeleteBasket(id){
    console.log(id)
    let index = orders.indexOf(id)
    let copyOrders = [...orders]
    copyOrders = copyOrders.filter(el => el.id !== id)
    console.log(copyOrders)
    console.log(orders)
    setOrders(copyOrders)
  }

  function chooseCategory(el){
    let copyCategories = [...categories];
    let includeFlag = false
    copyCategories.forEach(item => {
      if (item == el){
        includeFlag = true
      }
    })
    if (!includeFlag){
      copyCategories.push(el)
    }
    if (includeFlag){
      copyCategories.splice(copyCategories.indexOf(el), 1)
    }
    setCategories(copyCategories)
  }

  useEffect(() => {
    getCurrentItems(categories);
    console.log(currentItems)
  }, [categories]);

  function getCurrentItems(categories){
    let resItems = []
    let flagForAll = false
    categories.forEach(category => {
      if (category == 'all'){
        setCurrentItems(items)
        flagForAll = true
      }
      items.forEach(item => {
        if (item.category == category){
          resItems.push(item)
        }
      })
    })
    if (!flagForAll){
      setCurrentItems(resItems)
    }
    console.log(categories)
    console.log(currentItems)
  }

  return (
    <div>
      <Header orders={orders} onDelete={onDeleteBasket}/>
      <Categories categories={chooseCategory} categoriesValue={categories}/>
      <Items className='wrapper' items={currentItems} onAdd={addToBasket} />
      <Footer/>
    </div>
  )
}

export default App
