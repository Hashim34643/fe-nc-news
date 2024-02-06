import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from "./Components/Home"
import ArticleCard from './Components/ArticleCard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/article/:article_id" element={<ArticleCard />} />
      </Routes>
    </>
  )
}

export default App
