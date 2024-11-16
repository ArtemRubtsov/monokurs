import { useState } from 'react'

import styles from './currency.module.scss'

import { useGetCurrencyByCodeQuery } from '../../services'
import { Loader } from '../loader'
import { SelectCurrency } from '../select'

export const Currency = () => {
  const [selectCurrency, setCurrency] = useState<null | string>(null)
  const { data: currencies, error, isLoading: isCurrenciesLoading } = useGetCurrencyByCodeQuery()

  const currencyData = currencies?.find(currency => currency.cc === selectCurrency)

  if (isCurrenciesLoading) {
    return <Loader />
  }

  if (error) {
    return <div>error</div>
  }

  const handleChangeCurrency = (value: string) => setCurrency(value)

  return (
    <div className={styles.currency}>
      <SelectCurrency currency={currencies} onChange={handleChangeCurrency} />
      {isCurrenciesLoading && <Loader />}
      {currencyData && (
        <div className={styles.card}>
          <h2 className={styles.title}>{currencyData.txt}</h2>
          <p className={styles.info}>
            Курс: <span>{currencyData.rate}</span>
          </p>
          <p className={styles.info}>
            Код валюти: <span>{currencyData.cc}</span>
          </p>
          <p className={styles.info}>
            Дата курса: <span>{currencyData.exchangedate}</span>
          </p>
        </div>
      )}
    </div>
  )
}
