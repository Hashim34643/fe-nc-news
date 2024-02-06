import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../Components-Styles/ArticlesList.css"
import {format} from "date-fns";


const ArticlesListAllArticles = () => {
  const [articles, setArticles] = useState([]);
  const formatDate = (dateString) => {
    return format(new Date(dateString), 'MMMM dd, yyyy HH:mm');
  };
  useEffect(() => {
    const fetchArticles = () => {
      axios.get(`https://backend-nc-news-l5zm.onrender.com/api/articles?limit=100000`)
        .then(response => {
          setArticles(response.data.articles);
        })
        .catch(error => {
          console.log("error", error);
        });
    };
    fetchArticles();
  }, []);

  return (
    <>
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

export default ArticlesListAllArticles;