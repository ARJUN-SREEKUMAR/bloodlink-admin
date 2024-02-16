import './Global.css'
import Admin from './pages/Admin'
import Home from './pages/Home'
import PageNotFound from './pages/404'
import "./Global.css";
import {BrowserRouter,Routes, Route  } from 'react-router-dom'
function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/dashboard' element={<Admin/>}/>
         <Route  path="*" element={<PageNotFound />}
          />
        </Routes>
          
      </BrowserRouter>
    </>
  )
}

export default App
