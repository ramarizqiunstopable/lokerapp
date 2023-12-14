import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home  from '../pages/home'
import LayoutLanding from '../widgets/LayoutLanding'

const Router = () => {
  return (
    <>
      <BrowserRouter>

      <Routes>
        <Route path ='/' element={ 
            <LayoutLanding>
                <Home/>
            </LayoutLanding>
        }/>
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default Router
