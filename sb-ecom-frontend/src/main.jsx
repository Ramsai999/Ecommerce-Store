import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/reducers/store.js' 
import './App.css'
import App from './App.jsx'
import React from 'react'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     
        <App/>
  
  </Provider>
  
)
