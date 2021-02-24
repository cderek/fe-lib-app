import React, { useState } from 'react'
import './App.less'
import './style/iconfont.less'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <nav className="menu">
        <div className="smartphone-menu-trigger"></div>
        <header className="avatar">
          <img src="https://assets.codepen.io/441030/internal/avatars/users/default.png" />
          <h2>derek</h2>
        </header>
        <ul>
          <li className="iconfont iconicon-doc"><span>JavaScript防抖</span></li>
          <li className="iconfont iconicon-doc"><span>JavaScript节流</span></li>
          <li className="iconfont iconicon-doc"><span>JavaScript深浅拷贝</span></li>
          <li className="iconfont iconicon-doc"><span>JavaScript数组去重</span></li>
        </ul>
      </nav>
    </main>
  )
}
export default App
