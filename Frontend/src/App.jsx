import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreateBook from './pages/CreateBook'
import EditBook from './pages/EditBook'
import ShowBook from './pages/ShowBook'
import DeleteBook from './pages/DeleteBook'
import Spinner from './components/Spinner'
import Header from './components/Header'
const App = () => {
  return (
    <div>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/books/create' element={<CreateBook />}/>
      <Route path='/books/edit/:id' element={<EditBook />}/>
      <Route path='/books/details/:id' element={<ShowBook />}/>
      <Route path='/books/delete/:id' element={<DeleteBook />}/>
    </Routes>
    </div>
  )
}

export default App
