import { Provider } from 'react-redux'

import './styles/normalize.scss'

import style from './styles/app.module.scss'

import { Exchange } from '../components/exchange'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <div className={style.app}>
        <Exchange />
      </div>
    </Provider>
  )
}

export default App
