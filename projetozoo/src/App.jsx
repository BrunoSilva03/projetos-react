import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
