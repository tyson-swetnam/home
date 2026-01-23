import React from 'react'
import ReactDOM from 'react-dom/client'
import LLMWidget from './components/LLMWidget'
import './styles.css'

const container = document.createElement('div')
container.id = 'llm-widget-container'
document.body.appendChild(container)

ReactDOM.createRoot(container).render(<LLMWidget />)