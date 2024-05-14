import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import App from './App.js'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';


ReactDOM.createRoot(document.getElementById('root')).render(
  <MantineProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MantineProvider>
)
