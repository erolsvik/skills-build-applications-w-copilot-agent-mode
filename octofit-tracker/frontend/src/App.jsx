import './App.css'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { apiBaseUrl } from './api'

function App() {
  return (
    <div className="container py-4">
      <header className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4">
        <div>
          <h1 className="display-6 fw-bold">OctoFit Tracker</h1>
          <p className="text-muted mb-0">A modern multi-tier fitness app for teams, workouts, and leaderboard tracking.</p>
        </div>
        <nav className="mt-3 mt-md-0">
          <NavLink className="btn btn-outline-primary me-2 mb-2" to="users">Users</NavLink>
          <NavLink className="btn btn-outline-primary me-2 mb-2" to="teams">Teams</NavLink>
          <NavLink className="btn btn-outline-primary me-2 mb-2" to="activities">Activities</NavLink>
          <NavLink className="btn btn-outline-primary me-2 mb-2" to="workouts">Workouts</NavLink>
          <NavLink className="btn btn-outline-primary mb-2" to="leaderboard">Leaderboard</NavLink>
        </nav>
      </header>

      <section className="mb-4">
        <div className="alert alert-info">
          <p className="mb-1">
            <strong>Important:</strong> Define <code>VITE_CODESPACE_NAME</code> in <code>.env.local</code> when running in a Codespace.
          </p>
          <p className="mb-0 text-wrap">
            API Base URL: <code>{apiBaseUrl}</code>
          </p>
        </div>
      </section>

      <main>
        <Outlet />
      </main>

      <footer className="mt-5 py-3 border-top text-center text-muted">
        <p className="mb-0">OctoFit Tracker uses environment-aware API URLs for Codespaces and localhost.</p>
        <p className="mb-0">
          <Link to="/">Home</Link>
        </p>
      </footer>
    </div>
  )
}

export default App
