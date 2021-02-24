import React, { useState } from 'react'
import './App.less'
import './style/iconfont.less'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <nav className="menu" tabIndex="0">
        <div className="smartphone-menu-trigger"></div>
        <header className="avatar">
          <img src="https://assets.codepen.io/441030/internal/avatars/users/default.png" />
          <h2>derek</h2>
        </header>
        <ul>
          <li tabIndex="0" className="iconfont iconicon-doc"><span>JavaScript防抖</span></li>
          <li tabIndex="1" className="iconfont iconicon-doc"><span>JavaScript节流</span></li>
          <li tabIndex="2" className="iconfont iconicon-doc"><span>JavaScript深浅拷贝</span></li>
          <li tabIndex="3" className="iconfont iconicon-doc"><span>JavaScript数组去重</span></li>
        </ul>
      </nav>
    </main>
  )
}

export default App
