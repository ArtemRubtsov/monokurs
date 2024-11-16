import style from './exchange.module.scss'

import { Currency } from '../currency'

export const Exchange = () => {
  return (
    <div className={style.exchange}>
      <h1 className={style.title}>EXCHANGE</h1>
      <Currency />
    </div>
  )
}
