import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Import your pages here
import HomePage from './pages/HomePage'
// import AboutPage from './pages/AboutPage'

function App() {
  return (
    <Router>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
    </Router>
  )
}

export default App
