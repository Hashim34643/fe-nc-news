import { useState, useEffect } from 'react'
import axios from 'axios';
import Header from "./Header";
import CommentsCard from './CommentsCard';
import Votes from './Votes';
import { useParams } from 'react-router-dom';
import {format} from "date-fns";
import AddComment from './AddComment';

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
        return <div>Loading...</div>;
    }
    const handleSubmit = (comment) => {

    };
    return (
        <>
            <Header></Header>
            <div className="article-card">
                <h2>{article.title}</h2>
                <p>Topic: {article.topic}</p>
                <p>Author: {article.author}</p>
                <p>Created at: {formatDate(article.created_at)}</p>
                <p>{article.body}</p>
            <Votes votes={article.votes}/>
            </div>
            <CommentsCard />
            <AddComment articleId={article_id} onSubmit={handleSubmit}/>
        </>
    )
}

export default ArticleCard