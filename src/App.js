import React from 'react'
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Header from "./components/Header/Header"
import NotFound from "./components/NotFound/NotFound"
import Dashboard from "./components/Dashboard/Dashboard"
import Reviews from "./components/Reviews/Reviews"
import Blogs from "./components/Blogs/Blogs"





function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<NotFound />} />


      </Routes>
    </div >
  );
}

export default App;
