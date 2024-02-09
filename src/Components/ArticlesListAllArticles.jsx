import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { format } from "date-fns";
import SortQueries from './SortQueries';
import "../Components-Styles/ArticlesList.css"

const ArticleListAllArticles = () => {
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState("created_at");
  const [sortOrder, setSortOrder] = useState("desc");

  const formatDate = (dateString) => {
    return format(new Date(dateString), 'MMMM dd, yyyy HH:mm');
  };

  const fetchArticles = () => {
    axios.get(`https://backend-nc-news-l5zm.onrender.com/api/articles?sort_by=${sortBy}&order=${sortOrder}&limit=100000`)
      .then(response => {
        setArticles(response.data.articles);
      })
      .catch(error => {
        console.error("error", error);
      });
  };

  useEffect(() => {
    fetchArticles();
  }, [sortBy, sortOrder]);

  const handleSortByChange = (sortBy) => {
    setSortBy(sortBy);
  };

  const handleSortOrderChange = (sortOrder) => {
    setSortOrder(sortOrder);
  };

  if (articles.length === 0) {
    return <div>Loading...</div>;

  }

  return (
    <>
      <SortQueries
        searchParams={location.search}
        handleSortByChange={handleSortByChange}
        handleSortOrderChange={handleSortOrderChange}
      />
      <div className='articless-list-all-articles'>
        <h2>Latest Articles</h2>
        <ul>
          <div className="single-article-all-article">
            {articles.map(article => (
              <li key={article.title}>
                <Link to={`/article/${article.article_id}`}>
                  <h3>{article.title}</h3>
                </Link>
                <p>{article.topic}</p>
                <p>{article.author}</p>
                <p>{formatDate(article.created_at)}</p>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </>
  );
}

export default ArticleListAllArticles;