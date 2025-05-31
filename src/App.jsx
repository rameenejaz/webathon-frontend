import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Contact from './pages/Contact'
import Departments from './pages/Departments'
import ReportIssue from './pages/ReportIssue'
import InteractiveMap from './pages/InteractiveMap'
import ProposalsAndVote from './pages/ProposalsAndVote'
import Communication from './pages/Communication'
import MyIssues from './pages/MyIssues'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'
// Import your pages here
import HomePage from './pages/HomePage'
// import AboutPage from './pages/AboutPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Define your routes here */}
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/issues/report" element={<ReportIssue />} />
            <Route path="/issues/reported" element={<MyIssues />} />
            <Route path="/map" element={<InteractiveMap />} />
            <Route path="/proposals/view" element={<ProposalsAndVote />} />
            <Route path="/communication/chat" element={<Communication />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}
export default App
