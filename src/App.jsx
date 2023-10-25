import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import Pricing from "./routes/Pricing"
import Training from "./routes/Training"
import Contact from "./routes/Contact"
import './App.css'


const App = () => {
  return (
    <div className="my-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/training" element={<Training />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
