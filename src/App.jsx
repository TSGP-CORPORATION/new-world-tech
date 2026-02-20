import React from 'react'
import './App.css'
import { Route ,Routes} from 'react-router-dom'
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import Home from './Pages/Home/Home'
import Programs from './Pages/Programs/Programs'
import ProgramDetail from './Pages/ProgramDetail/ProgramDetail'
import Footer from './Components/Footer/Footer'
import History from './Pages/About/History/History'
import Admission from './Pages/Admissions/Admission'

const App = () => {

  return (
    <>
    <Header/>
    <NavBar/>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/programs' element={<Programs/>}/>
        <Route path='/program/:id' element={<ProgramDetail/>}/>
        <Route path='/about/history' element={<History/>}/>
        <Route path='/admissions' element={<Admission/>}/>
      </Routes>
      

    </div>
    <Footer/>
    </>
  )
}

export default App