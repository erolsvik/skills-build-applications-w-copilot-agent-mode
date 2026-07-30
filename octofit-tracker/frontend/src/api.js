const codespaceName = import.meta.env.VITE_CODESPACE_NAME;

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

export const apiEndpoints = {
  users: `${apiBaseUrl}/api/users`,
  teams: `${apiBaseUrl}/api/teams`,
  activities: `${apiBaseUrl}/api/activities`,
  workouts: `${apiBaseUrl}/api/workouts`,
  leaderboard: `${apiBaseUrl}/api/leaderboard`,
};
