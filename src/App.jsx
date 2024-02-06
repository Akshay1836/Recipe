import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet, Route,Routes } from 'react-router-dom'
import Recipes from './components/Recipes'
import Explore from './components/Explore'
import Cuisine from './components/Cuisine'
import Icons from './components/Icons'
import Searched from './components/Searched'
import Details from './components/Details'




function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Icons/>}>
            <Route path='/' index element={<Recipes/>}/>
            <Route path='cuisine/:type' element={<Cuisine/>}/>
            <Route path='searched/:search' element={<Searched/>}/>
            <Route path='cuisine/:type/item/:id' element={<Details/>}/> 
            <Route path='searched/:search/item/:id' element={<Details/>}/>
            <Route path='item/:id' element={<Details/>}/>
          </Route>
        </Routes>
    </>
  )
}

export default App
