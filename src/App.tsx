import Card from './Components/Card'
import About from './Pages/About'
import Home from './Pages/Home'
import CardView from './Pages/CardView'
import UserTest from './Pages/UserTest'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='card-view' element={<CardView />} />
          <Route path='users' element={<UserTest />} />
        </Routes>
      </header>
    </div>
  )
}

export default App
