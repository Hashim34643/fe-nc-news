import { useState, useEffect } from 'react'
import axios from 'axios';
import Header from "./Header";
import CommentsCard from './CommentsCard';
import Votes from './Votes';
import { useParams, Link } from 'react-router-dom';
import {format} from "date-fns";
import "../Components-Styles/ArticleCard.css"

const ArticleCard = () => {
    const [article, setArticle] = useState(null);
    const { article_id } = useParams();
    const formatDate = (dateString) => {
        return format(new Date(dateString), 'MMMM dd, yyyy HH:mm');
      };
    useEffect(() => {
        const fetchArticle = () => {
            axios.get(`https://backend-nc-news-l5zm.onrender.com/api/articles/${article_id}?sort_by=article_id`)
                .then(response => {
                    setArticle(response.data.article);
                })
                .catch(error => {
                    console.log("error", error);
                });
        };

        fetchArticle();
    }, [article_id]);
    if (article === null) {
        return <div>Loading Article...</div>;
    }
    const handleSubmit = (comment) => {

    };
    return (
        <>
            <Header></Header>
            <div className="article-card">
                <h2>{article.title}</h2>
                <img src={article.article_img_url} alt="" className='article-card-image'/>
                <p>Topic: {article.topic}</p>
                <p>Author: {article.author}</p>
                <p>Created at: {formatDate(article.created_at)}</p>
                <p className='body-text'>{article.body}</p>
            <Votes votes={article.votes}/>
            </div>
            <div className="comments-card">
            <CommentsCard/>
            </div>
        </>
    )
}

export default ArticleCard