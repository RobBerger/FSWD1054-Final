import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import PartList from './PartList'
import Part from './Part'
import PartForm from './PartForm';
import About from './About';
import Welcome from './Welcome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<Welcome />} />
          <Route path="about" element={<About />} />
          <Route path="parts" element={<PartList />} />
          <Route path="add" element={<PartForm />} />
          <Route path=":partId" element={<Part />} />
          <Route path="/edit/:partId" element={<PartForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App