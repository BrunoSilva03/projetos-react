import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import NewAnimal from './components/pages/NewAnimal'
import Animals from './components/pages/Animals'
import About from './components/pages/About'
import Contact from './components/pages/Contact'


import './App.css'

function App() {
  

  return (
    <>
      <Router>

        <Routes>

          <Route exact path="/" element={<Home />}></Route>

          <Route path="/addanimal" element={<NewAnimal />}></Route>

          <Route path="/animals" element={<Animals />}></Route>

          <Route path="/about" element={<About />}></Route>

          <Route path="/contact" element={<Contact />}></Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
