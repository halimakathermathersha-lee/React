
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
         <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App