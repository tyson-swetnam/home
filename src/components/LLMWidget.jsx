import React, { useState, useRef, useEffect } from 'react'

const LLMWidget = () => {
  const [isMinimized, setIsMinimized] = useState(true)
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage = { role: 'user', content: inputValue.trim() }
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)
    setError('')

    try {
      const apiKey = import.meta.env.VITE_CYVERSE_API_KEY || process.env.VITE_CYVERSE_API_KEY
      
      if (!apiKey) {
        throw new Error('API key not configured')
      }

      const response = await fetch('https://llm-api.cyverse.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gemma-3-12b-it',
          messages: [...messages, userMessage],
          max_tokens: 500,
          temperature: 0.7,
        }),
      })

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`)
      }

      const data = await response.json()
      const assistantMessage = {
        role: 'assistant',
        content: data.choices[0]?.message?.content || 'No response received'
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (err) {
      console.error('Error sending message:', err)
      setError(`Error: ${err.message}`)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.'
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const toggleWidget = () => {
    setIsMinimized(!isMinimized)
  }

  if (isMinimized) {
    return (
      <div className="llm-widget minimized" onClick={toggleWidget}>
        <div className="widget-header">
          <span style={{ fontSize: '24px' }}>💬</span>
        </div>
      </div>
    )
  }

  return (
    <div className="llm-widget">
      <div className="widget-header" onClick={toggleWidget}>
        <div className="widget-title">CyVerse AI Assistant</div>
        <button className="toggle-btn" onClick={(e) => {e.stopPropagation(); toggleWidget()}}>
          −
        </button>
      </div>
      
      <div className="chat-container">
        <div className="messages">
          {messages.length === 0 && (
            <div className="message assistant">
              Hi! I'm your AI assistant powered by CyVerse Verde. Ask me anything!
            </div>
          )}
          
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.role}`}>
              {message.content}
            </div>
          ))}
          
          {isLoading && (
            <div className="message loading">
              AI is thinking...
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        <div className="input-container">
          <input
            type="text"
            className="message-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything..."
            disabled={isLoading}
          />
          <button
            className="send-btn"
            onClick={sendMessage}
            disabled={isLoading || !inputValue.trim()}
          >
            Send
          </button>
        </div>
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
      </div>
    </div>
  )
}

export default LLMWidget