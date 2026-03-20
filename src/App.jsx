import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentProfile from './pages/StudentProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;