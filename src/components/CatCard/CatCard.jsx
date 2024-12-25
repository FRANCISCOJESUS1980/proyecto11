import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function CatCard({ cat }) {
  if (!cat || !cat.url) return null

  return (
    <div className='cat-card'>
      <img src={cat.url} alt='Cat' />
      <Link to={`/cat/${cat.id}`}>View Details</Link>
    </div>
  )
}

CatCard.propTypes = {
  cat: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
}

export default CatCard
