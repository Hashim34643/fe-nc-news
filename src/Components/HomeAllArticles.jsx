import React from 'react'
import axios from 'axios'
import Header from './Header'
import ArticlesListAllArticles from './ArticlesListAllArticles'
import '../Components-Styles/Home.css'

const HomeAllArticles = () => {
  return (
    
    <>
    <div className='home-all-articles'>
        <Header />
    </div>
    <div className="articles-list-all-articles">
        <ArticlesListAllArticles />
    </div>
    </>
  )
}

export default HomeAllArticles;