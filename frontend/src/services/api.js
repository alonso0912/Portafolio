// Cliente API para llamadas al backend
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export const fetchAPI = async (endpoint, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  })

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`)
  }

  return response.json()
}

// Ejemplo de función específica:
// export const getProjects = () => fetchAPI('/api/projects')
