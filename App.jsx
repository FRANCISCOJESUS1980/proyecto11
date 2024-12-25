import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CatDetails from './pages/CatDetails'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import Search from './pages/Search/Search'
import Favorites from './pages/Favorites/Favorites'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cat/:id' element={<CatDetails />} />
        <Route path='/search' element={<Search />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
