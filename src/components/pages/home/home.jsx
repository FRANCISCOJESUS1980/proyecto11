import { useState, useEffect } from 'react'
import CatCard from '../../CatCard/CatCard'
import Loader from '../Loader/Loader'
import { fetchCats } from '../../../services/api'
import './home.css'

function Home() {
  const [cats, setCats] = useState([])
  const [loading, setLoading] = useState(false)

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
            <CatCard key={cat.id} cat={cat} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
