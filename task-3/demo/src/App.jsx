import React from 'react'
import Fetch from './Fetch'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>

    <Fetch/>
    </Provider>
  )
}

export default App