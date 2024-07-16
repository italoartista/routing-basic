
import './App.css'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import About from './pages/About'
import Layout from './layout/Layout'  
import NoPage from './pages/NoPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
          </Route>
            <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
