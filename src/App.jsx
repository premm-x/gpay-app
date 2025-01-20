import React from 'react'
import Balance from './pages/Balance'
import TopPage from './pages/TopPage'
import { Routes, Route } from "react-router-dom"
import LastPage from './pages/lastPage'

function App() {
  return (
    <Routes>
      <Route path={"/gpay-app"} element={<TopPage/>} />
      <Route path={"/balance"} element={<Balance/>} />
      <Route path={"/last"} element={<LastPage/>} />
    </Routes>
  )
}

export default App
