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
import Leadership from './Pages/About/Leadership/Leadership'
import Vision_Mission from './Pages/About/Vision_Mission/Vision_Mission'

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
        
        <Route path='/about/leadership' element={<Leadership/>}/>
        <Route path='/about/mission_vision' element={<Vision_Mission/>}/>
        <Route path='/admissions' element={<Admission/>}/>
      </Routes>
      

    </div>
    <Footer/>
    </>
  )
}

export default App