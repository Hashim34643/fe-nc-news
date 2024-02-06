import React from 'react'
import axios from 'axios'
import Header from './Header'
import ArticlesList from './ArticlesList'
import '../Components-Styles/Home.css'

const Home = () => {
  return (
    
    <>
    <div className='home'>
        <Header />
    </div>
    <div className="text">
        <h1>Our Mission</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, temporibus! At nisi porro quas! Voluptatum, quaerat exercitationem ex perspiciatis hic quisquam quae veritatis corporis accusamus beatae itaque rem, quis temporibus, voluptatibus aperiam unde doloribus voluptas perferendis iusto error eligendi! Nesciunt obcaecati sint nobis provident minima quis enim in. Rem, at!
    </div>
    <div className="articles-list">
        <ArticlesList />
    </div>
    </>
  )
}

export default Home