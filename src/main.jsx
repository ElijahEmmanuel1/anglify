import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import lottie from 'lottie-web'
import { defineElement } from '@lordicon/element'

// Register the custom element
defineElement(lottie.loadAnimation)


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
