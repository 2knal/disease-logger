const API_URL = 'http://localhost:5000';

export async function listLogEntries() {
  const response = await fetch(`${API_URL}/api/diseases`);
  return response.json();
}

export async function createLogEntry(entry) {
  const response = await fetch(`${API_URL}/api/diseases`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(entry),
  });
  return response.json();
}