import './Global.css'
import {lazy, Suspense} from 'react'
import Loading from './components/Loading';
const Admin = lazy(() => import('./pages/Admin'));
const Home = lazy(() => import('./pages/Home'));
const PageNotFound = lazy(() => import('./pages/404'));
import "./Global.css";
import {BrowserRouter,Routes, Route  } from 'react-router-dom'
function App() {
 

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={
         <Loading/>
        }>
          <Routes>
            <Route path='/dashboard' element={<Admin/>}/>
            <Route  path="*" element={<PageNotFound />} />
            <Route path='/' element={<Home/>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}
export default App
