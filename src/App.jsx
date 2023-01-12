import { Route, Routes } from 'react-router-dom'
import './App.css'
import ErrorPage from './assets/pages/error-page'
import HomePage from './assets/pages/home-page'
import HeaderComp from './assets/layout/header'
import FooterComp from './assets/layout/footer'

function App() {

  return (
    <div className="App">
      <HeaderComp />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
      <FooterComp />
    </div>
  )
}

export default App
