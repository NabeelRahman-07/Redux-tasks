import React from 'react'
import {Provider} from "react-redux"
import { store } from './FetchStore'
import Fetch from './Fetch'

function App() {
  return (
    <Provider store={store}>
      <Fetch/>
    </Provider>
  )
}

export default App