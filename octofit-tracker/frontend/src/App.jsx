import './App.css'

function App() {
  return (
    <main className="container py-5">
      <div className="row align-items-center g-5">
        <div className="col-lg-7">
          <h1 className="display-4 fw-bold mb-3">OctoFit Tracker</h1>
          <p className="lead text-muted mb-4">
            A modern multi-tier fitness application for logging workouts, managing teams,
            and climbing the leaderboard.
          </p>
          <div className="d-flex gap-3">
            <a className="btn btn-primary btn-lg" href="#features">Explore features</a>
            <a className="btn btn-outline-secondary btn-lg" href="#team">Join a team</a>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h2 className="h4 fw-semibold">Ready to train smarter?</h2>
              <p className="text-muted mb-0">
                Track your progress, stay accountable, and uncover personalized workout ideas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section id="features" className="mt-5 row g-4">
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h3 className="h5">Activity logging</h3>
              <p className="text-muted mb-0">Record daily workouts and monitor consistency.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h3 className="h5">Team challenges</h3>
              <p className="text-muted mb-0">Create teams and invite friends to compete.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h3 className="h5">Smart insights</h3>
              <p className="text-muted mb-0">Use leaderboards and recommendations to stay motivated.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
