import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import {format} from "date-fns";

const TopicArticles = () => {
    const { topic_slug } = useParams();
    const [articles, setArticles] = useState([]);
  
    useEffect(() => {
      axios
        .get(`https://backend-nc-news-l5zm.onrender.com/api/articles?topic=${topic_slug}`)
        .then((response) => {
          setArticles(response.data.articles);
        })
        .catch((error) => {
          console.error("Error fetching articles:", error);
        });
    }, [topic_slug]);
    const formatDate = (dateString) => {
        return format(new Date(dateString), 'MMMM dd, yyyy HH:mm');
      };
    return (
      <div>
        <Header />
        <h2>Articles for: {topic_slug}</h2>
        <ul>
          {articles.map((article) => (
          <li key={article.title}>
          <Link to={`/article/${article.article_id}`}>
            <h3>{article.title}</h3>
          </Link>
            <p>{article.topic}</p>
            <p>{article.author}</p>
            <p>{formatDate(article.created_at)}</p>
        </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default TopicArticles;