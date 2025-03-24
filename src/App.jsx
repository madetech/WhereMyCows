import { Routes, Route, Link } from 'react-router-dom'
import CattleList from './components/CattleList'
import './App.css'

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Where My Cows</h1>
      <p>Track your cattle with ease</p>
      <div className="features">
        <div className="feature-card">
          <h3>Track Location</h3>
          <p>Know exactly where your cattle are at all times</p>
        </div>
        <div className="feature-card">
          <h3>Health Status</h3>
          <p>Monitor the health and well-being of your herd</p>
        </div>
        <div className="feature-card">
          <h3>Easy Management</h3>
          <p>Simple and intuitive interface for managing your cattle</p>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cattle">Cattle</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cattle" element={<CattleList />} />
        </Routes>
      </main>
    </div>
  )
}

export default App 