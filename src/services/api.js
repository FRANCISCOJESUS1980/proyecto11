/*const BASE_URL = 'https://api.thecatapi.com/v1'

export const fetchCats = async (limit = 10) => {
  try {
    const response = await fetch(`${BASE_URL}/images/search?limit=${limit}`)
    if (!response.ok) throw new Error('Failed to fetch cats')
    return await response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const fetchCatDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/images/${id}`)
    if (!response.ok) throw new Error('Failed to fetch cat details')
    return await response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}
export const searchCats = async (breed = '') => {
  try {
    const response = await fetch(
      `${BASE_URL}/images/search?limit=10&breed_ids=${breed}`
    )
    if (!response.ok) throw new Error('Failed to search cats')
    return await response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const fetchBreeds = async () => {
  try {
    const response = await fetch(`${BASE_URL}/breeds`)
    if (!response.ok) throw new Error('Failed to fetch breeds')
    return await response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}*/
const BASE_URL = 'https://api.thecatapi.com/v1'

/**
 * @param {string} endpoint
 * @param {object} [options={}]
 * @returns {Promise<any>}
 */
const fetchFromApi = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, options)
    if (!response.ok) throw new Error(`Failed to fetch: ${endpoint}`)
    return await response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const fetchCats = (limit = 10) => {
  return fetchFromApi(`images/search?limit=${limit}`)
}

export const fetchCatDetails = (id) => {
  return fetchFromApi(`images/${id}`)
}

export const searchCats = (breed = '') => {
  return fetchFromApi(`images/search?limit=10&breed_ids=${breed}`)
}

export const fetchBreeds = () => {
  return fetchFromApi('breeds')
}
