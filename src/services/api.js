const BASE_URL = 'https://api.thecatapi.com/v1'

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
}
