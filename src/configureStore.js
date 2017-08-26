import { createStore } from 'redux'
import reducer from './reducers'

const configureStore = () => {

  const store = createStore(
    reducer,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )

  return store
}

export default configureStore
