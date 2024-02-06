import { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import "../Components-Styles/ArticlesList.css"

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const articlesPerPage = 3;

  useEffect(() => {
    const fetchArticles = () => {
      axios.get(`https://backend-nc-news-l5zm.onrender.com/api/articles?limit=100000`)
        .then(response => {
          setArticles(response.data.articles);
          console.log(response.data.articles)
        })
        .catch(error => {
          console.log("error", error);
        });
    };
    fetchArticles();
  }, [currentPage]);


  const handleClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  const startIndex = currentPage * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const paginatedArticles = articles.slice(startIndex, endIndex);

  return (
    <>
    <div className='articless-list'>
      <h2>Latest Articles</h2>
      <ul>
        <div className="single-article">
        {paginatedArticles.map(article => (
          <li key={article.title}>
              <h3>{article.title}</h3>
              <p>{article.topic}</p>
              <p>{article.author}</p>
              <p>{article.created_at}</p>
          </li>
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
        onPageChange={handleClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
      </>
  );
}

export default ArticlesList;