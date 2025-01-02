/*import { useState, useEffect } from 'react'
import CatCard from '../../CatCard/CatCard'
import Loader from '../Loader/Loader'
import { fetchCats } from '../../../services/api'
import './home.css'
import { useFavorites } from '../../hooks/useFavorites'
import { Heart } from 'lucide-react'

function Home() {
  const [cats, setCats] = useState([])
  const [loading, setLoading] = useState(false)
  const { isFavorite, addFavorite, removeFavorite } = useFavorites()

  const loadCats = async (limit = 10) => {
    setLoading(true)
    try {
      const data = await fetchCats(limit)
      setCats(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleFavoriteClick = (catId) => {
    if (isFavorite(catId)) {
      removeFavorite(catId)
    } else {
      addFavorite(catId)
    }
  }

  useEffect(() => {
    loadCats(1)
  }, [])

  return (
    <div>
      <h1>Welcome to Cat Explorer</h1>
      <button className='button' onClick={() => loadCats(1)}>
        Get One Cat
      </button>
      <button className='button' onClick={() => loadCats(10)}>
        Get Ten Cats
      </button>
      {loading ? (
        <Loader />
      ) : (
        <div className='cat-grid'>
          {cats.map((cat) => (
            <div key={cat.id} className='cat-card'>
              <CatCard cat={cat} />
              <button
                className={`favorite-button ${
                  isFavorite(cat.id) ? 'active' : ''
                }`}
                onClick={() => handleFavoriteClick(cat.id)}
                aria-label={
                  isFavorite(cat.id)
                    ? 'Remove from favorites'
                    : 'Add to favorites'
                }
              >
                <Heart className='heart-icon' />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Home*/
import { useState, useEffect } from 'react'
import CatCard from '../../CatCard/CatCard'
import Loader from '../Loader/Loader'
import { fetchCats } from '../../../services/api'
import './home.css'
import { useFavorites } from '../../hooks/useFavorites'

function Home() {
  const [cats, setCats] = useState([])
  const [loading, setLoading] = useState(false)
  const { isFavorite, addFavorite, removeFavorite } = useFavorites()

  const loadCats = async (limit = 10) => {
    setLoading(true)
    try {
      const data = await fetchCats(limit)
      setCats(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleFavoriteClick = (catId) => {
    if (isFavorite(catId)) {
      removeFavorite(catId)
    } else {
      addFavorite(catId)
    }
  }

  useEffect(() => {
    loadCats(1)
  }, [])

  return (
    <div>
      <h1>Welcome to Cat Explorer</h1>
      <button className='button' onClick={() => loadCats(1)}>
        Get One Cat
      </button>
      <button className='button' onClick={() => loadCats(10)}>
        Get Ten Cats
      </button>
      {loading ? (
        <Loader />
      ) : (
        <div className='cat-grid'>
          {cats.map((cat) => (
            <CatCard
              key={cat.id}
              cat={cat}
              isFavorite={isFavorite(cat.id)}
              onFavoriteClick={() => handleFavoriteClick(cat.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
