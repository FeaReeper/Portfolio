import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import './App.css' 
import Projects from './components/Projects'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/projects'element={<Projects/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
