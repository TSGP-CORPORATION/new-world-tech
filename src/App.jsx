import React from 'react'
import './App.css'
import { Route ,Routes} from 'react-router-dom'
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
    <Header/>
    <NavBar/>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      

    </div>
    <Footer/>
    </>
  )
}

export default App