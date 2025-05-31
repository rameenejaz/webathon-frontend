// Updated App.jsx
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
import Communication from './pages/Communication'
import MyIssues from './pages/MyIssues'
import Auth from './pages/Auth'
import HomePage from './pages/HomePage'
import MySubmissions from './pages/MySubmissions'
import VotingResults from './pages/VotingResults'
import NotificationsCenter from './pages/NotificationsCenter'
import SharedFiles from './pages/SharedFiles'
import AboutOverview from './pages/AboutOverview'
import ARFeatureGuide from './pages/ARFeatureGuide'
import ProposalVote from './pages/ProposalVote'
import ViewProposals from './pages/ViewProposals'
import Documentation from './pages/Documentation'

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
            <Route path="/about/overview" element={<AboutOverview />} />
            <Route path="/about/ar-guide" element={<ARFeatureGuide />} />
            <Route path="/about/docs" element={<Documentation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/issues/report" element={<ReportIssue />} />
            <Route path="/issues/reported" element={<MyIssues />} />
            <Route path="/issues/submissions" element={<MySubmissions />} />
            <Route path="/proposals/view" element={<ViewProposals />} />
            <Route path="/proposals/vote" element={<ProposalVote />} />
            <Route path="/proposals/results" element={<VotingResults />} />
            <Route path="/communication/chat" element={<Communication />} />
            <Route path="/communication/notifications" element={<NotificationsCenter />} />
            <Route path="/communication/files" element={<SharedFiles />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}
export default App