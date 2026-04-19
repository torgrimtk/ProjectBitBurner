import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Hidden from './pages/Hidden'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hidden" element={<Hidden />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
