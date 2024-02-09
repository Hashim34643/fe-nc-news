import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import {format} from "date-fns";
import SortQueries from './SortQueries';
import "../Components-Styles/TopicArticles.css"

const TopicArticles = () => {
    const { topic_slug } = useParams();
    const [articles, setArticles] = useState([]);
    const [sortBy, setSortBy] = useState("created_at");
    const [sortOrder, setSortOrder] = useState("desc");
    
    
    
    useEffect(() => {
      axios
        .get(`https://backend-nc-news-l5zm.onrender.com/api/articles?sort_by=${sortBy}&order=${sortOrder}&limit=100000&topic=${topic_slug}`)
        .then((response) => {
          setArticles(response.data.articles);
        })
        .catch((error) => {
          console.error("Error fetching articles:", error);
        });
      }, [topic_slug, sortBy, sortOrder]);
    const formatDate = (dateString) => {
        return format(new Date(dateString), 'MMMM dd, yyyy HH:mm');
      };
      const handleSortByChange = (sortBy) => {
        setSortBy(sortBy);
      };
    
      const handleSortOrderChange = (sortOrder) => {
        setSortOrder(sortOrder);
      };
      if (articles.length === 0) {
        return <div className='articles-loading'>Loading Articles...</div>;
      }
      return (
        <div>
        <Header />
        <div className="headerrr">
        <h2>Articles for: {topic_slug}</h2>
        </div>
        <div className="sort">
      <SortQueries
        searchParams={location.search}
        handleSortByChange={handleSortByChange}
        handleSortOrderChange={handleSortOrderChange}
        />
      </div>
      <div className="articless-list-all-articles">
        <ul>
          <div className="grid-container">
          {articles.map((article) => (
            <div className="grid-item" key={article.article_id}>
          <li key={article.title}>
          <Link to={`/article/${article.article_id}`}>
            <h3>{article.title}</h3>
          <img src={article.article_img_url} alt={`${article.title} cover image`} className='article-all-image'/>
          </Link>
            <p>{article.topic}</p>
            <p>{article.author}</p>
            <p>{formatDate(article.created_at)}</p>
        </li>
            </div>
          ))}
          </div>
        </ul>
        </div>
      </div>
    );
  };
  
  export default TopicArticles;