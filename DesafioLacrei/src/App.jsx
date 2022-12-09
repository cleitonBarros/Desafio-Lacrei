import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'



function App() {

  return (
    <Router>
      <ul>
        <li>Home</li>
        <li>contato</li>
      </ul>
      <Switch>

      </Switch>
      <p>Footer</p>
    </Router>
  )
}

export default App
