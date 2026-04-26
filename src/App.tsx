import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Hidden from './pages/Hidden'
import Nav from './components/Navbar'

function App() {

  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hidden" element={<Hidden />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
