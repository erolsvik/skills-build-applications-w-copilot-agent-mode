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

function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(apiEndpoints.users)
        if (!response.ok) {
          throw new Error(`Failed to load users (${response.status})`)
        }
        const payload = await response.json()
        setUsers(normalizeResponse(payload))
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  return (
    <div className="container py-4">
      <h2 className="mb-4">Users</h2>
      {loading && <p>Loading users...</p>}
      {error && <div className="alert alert-danger">{error}</div>}
      {!loading && !error && (
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user.id || user._id}>
                    <td>{user.id || user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-muted">
                    No user records were returned.
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

export default Users
