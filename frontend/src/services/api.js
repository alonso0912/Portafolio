const API_BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:5000'

const jsonHeaders = (options = {}) => ({
  'Content-Type': 'application/json',
  ...options,
})

const buildOptions = (options = {}) => ({
  headers: jsonHeaders(options.headers),
  ...options,
})

export const fetchAPI = async (endpoint, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, buildOptions(options))

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(errorText || response.statusText)
  }

  return response.json()
}

export const getServices = () => fetchAPI('/api/services')
export const getProjects = () => fetchAPI('/api/projects')
export const getSkills = () => fetchAPI('/api/skills')
export const getResume = () => fetchAPI('/api/resume')
export const getProfile = () => fetchAPI('/api/profile')
export const sendContact = (body) => fetchAPI('/api/contact', {
  method: 'POST',
  body: JSON.stringify(body),
})
export const login = (body) => fetchAPI('/api/auth/login', {
  method: 'POST',
  body: JSON.stringify(body),
})

const authOptions = (token, options = {}) => ({
  method: options.method || 'POST',
  headers: {
    Authorization: `Bearer ${token}`,
    ...jsonHeaders(options.headers),
  },
  ...options,
})

export const createProject = (body, token) =>
  fetchAPI('/api/projects', authOptions(token, {
    body: JSON.stringify(body),
  }))

export const updateProject = (id, body, token) =>
  fetchAPI(`/api/projects/${id}`, authOptions(token, {
    method: 'PUT',
    body: JSON.stringify(body),
  }))

export const deleteProject = (id, token) =>
  fetchAPI(`/api/projects/${id}`, authOptions(token, {
    method: 'DELETE',
  }))

export const updateProfile = (body, token) =>
  fetchAPI('/api/profile', authOptions(token, {
    method: 'PUT',
    body: JSON.stringify(body),
  }))
