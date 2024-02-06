import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from "./Components/Home"
import ArticleCard from './Components/ArticleCard';
import HomeAllArticles from './Components/HomeAllArticles';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/All_Articles" element={<HomeAllArticles />} />
        <Route path="/article/:article_id" element={<ArticleCard />} />
        <Route path="/article/:article_id/comments" element={<ArticleCard />} />
      </Routes>
    </>
  )
}

export default App
