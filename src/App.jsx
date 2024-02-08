import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from "./Components/Home"
import ArticleCard from './Components/ArticleCard';
import HomeAllArticles from './Components/HomeAllArticles';
import TopicArticles from './Components/TopicsArticles';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/All_Articles" element={<HomeAllArticles />} />
        <Route path="/article/:article_id" element={<ArticleCard />} />
        <Route path="/topics/:topic_slug" element={<TopicArticles />} />
      </Routes>
    </>
  )
}

export default App
