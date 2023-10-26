import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import NewAnimal from './components/pages/NewAnimal'
import Animals from './components/pages/Animals'
import AnimalsTest from './components/pages/AnimalsTest'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Animal from './components/pages/Animal'


import './App.css'

function App() {


  return (
    <>
      <Router>

        <Routes>

          <Route exact path="/" element={<Home />}></Route>

          <Route path="/newanimal" element={<NewAnimal />}></Route>

          <Route path="/animals" element={<Animals />}></Route>

          <Route path="/animalstest" element={<AnimalsTest />}></Route>

          <Route path="/about" element={<About />}></Route>

          <Route path="/contact" element={<Contact />}></Route>

          <Route path="/animals/:id" element={<Animal />}></Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
