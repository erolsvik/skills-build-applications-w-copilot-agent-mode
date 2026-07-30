import { useEffect, useState } from 'react'
import { apiEndpoints } from '../api'

const normalizeResponse = (payload) => {
  if (Array.isArray(payload)) return payload
  if (payload?.data && Array.isArray(payload.data)) return payload.data
  if (payload?.items && Array.isArray(payload.items)) return payload.items
  if (payload?.results && Array.isArray(payload.results)) return payload.results
  if (payload && typeof payload === 'object') return [payload]
  return []
}

function Activities() {
  const [activities, setActivities] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchActivities() {
      try {
        const response = await fetch(apiEndpoints.activities)
        if (!response.ok) {
          throw new Error(`Failed to load activities (${response.status})`)
        }
        const payload = await response.json()
        setActivities(normalizeResponse(payload))
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchActivities()
  }, [])

  return (
    <div className="container py-4">
      <h2 className="mb-4">Activities</h2>
      {loading && <p>Loading activities...</p>}
      {error && <div className="alert alert-danger">{error}</div>}
      {!loading && !error && (
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Type</th>
                <th>Duration</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {activities.length > 0 ? (
                activities.map((activity) => (
                  <tr key={activity.id || activity._id}>
                    <td>{activity.id || activity._id}</td>
                    <td>{activity.userId}</td>
                    <td>{activity.type}</td>
                    <td>{activity.durationMinutes} min</td>
                    <td>{activity.calories}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-muted">
                    No activity records were returned.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default Activities
