import { useEffect, useState } from 'react'

import { Button, Header, Section } from '@components'
import { CoffeeItem } from '@types'
import { getCoffeeItems } from '@utils/api'

import { CoffeeCard } from './coffee-card/coffee-card'

import styles from './main-page.module.scss'

const buttons = [
  { id: 0, title: 'All Products' },
  { id: 1, title: 'Available Now' }
]

export const MainPage = () => {
  const [isSelected, setIsSelected] = useState<number>(0)
  const [coffeeItems, setCoffeeItems] = useState<CoffeeItem[]>([])
  const [coffeeItemsFiltered, setCoffeeItemsFiltered] = useState<CoffeeItem[]>([])

  useEffect(() => {
    getCoffeeItems().then((data) => {
      setCoffeeItems(data)
      setCoffeeItemsFiltered(data)
    })
  }, [])

  const onButtonClick = (id: number) => {
    setIsSelected(id)
    if (id === 0) {
      setCoffeeItemsFiltered(coffeeItems)
    }
    if (id === 1) {
      setCoffeeItemsFiltered(coffeeItems.filter((item) => item.available))
    }
  }

  return (
    <>
      <Header />
      <Section>
        <div className={styles.header}>
          <h2 className={styles.header__title}>Our Collection</h2>
          <div className={styles.header__description}>
            <p>
              Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in
              small batches and shipped fresh weekly.
            </p>
          </div>

          <div className={styles.header__actions}>
            {buttons.map((button) => (
              <Button key={button.id} title={button.title} action={() => onButtonClick(button.id)} isPressed={isSelected === button.id} />
            ))}
          </div>
        </div>
        <div className={styles.coffee}>
          {coffeeItemsFiltered.map((item) => (
            <CoffeeCard
              key={item.id}
              image={item.image}
              name={item.name}
              available={item.available}
              popular={item.popular}
              price={item.price}
              rating={item.rating}
              votes={item.votes}
            />
          ))}
        </div>
      </Section>
    </>
  )
}
