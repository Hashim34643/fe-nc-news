import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import { format } from "date-fns";
import SortQueries from './SortQueries';
import "../Components-Styles/ArticlesList.css"

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [sortBy, setSortBy] = useState("created_at");
  const [sortOrder, setSortOrder] = useState("desc"); 
  const articlesPerPage = 3;

  const formatDate = (dateString) => {
    return format(new Date(dateString), 'MMMM dd, yyyy HH:mm');
  };

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleSortByChange = (sortBy) => {
    setSortBy(sortBy);
  };
  
  const handleSortOrderChange = (sortOrder) => {
    setSortOrder(sortOrder);
  };
  
  const startIndex = currentPage * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const paginatedArticles = articles.slice(startIndex, endIndex);
  
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
    }, [currentPage, sortBy, sortOrder]);
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
      <div className='articless-list'>
        <h2 className='latest-articles'>Latest Articles</h2>
        <ul>
          <div className="all-articles">
            {paginatedArticles.map(article => (
              <div className="single-article" key={article.article_id}>
                <li key={article.article_id}>
                  <Link to={`/article/${article.article_id}`}>
                    <h3 className='article-title-link'>{article.title}</h3>
                  </Link>
                  <img src={article.article_img_url} alt={`${article.title} cover image`} className='article-list-images'/>
                  <p>Topic: {article.topic}</p>
                  <p>Author: {article.author}</p>
                  <p>Date Published: {formatDate(article.created_at)}</p>
                </li>
              </div>
            ))}
          </div>
        </ul>
      </div>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={Math.ceil(articles.length / articlesPerPage)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </>
  );
}

export default ArticlesList;