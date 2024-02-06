import { useState, useEffect } from 'react'
import axios from 'axios';
import Header from "./Header";
import { useParams } from 'react-router-dom';

const ArticleCard = () => {
    const [article, setArticle] = useState(null);
    const { article_id } = useParams();

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
    return (
        <>
            <Header></Header>
            <div className="article-card">
                <h2>{article.title}</h2>
                <p>Topic: {article.topic}</p>
                <p>Author: {article.author}</p>
                <p>Created at: {article.created_at}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, rerum ipsum vero aliquam aperiam architecto! Repellendus eius iusto doloribus ea libero quidem blanditiis aliquid deserunt minus. Omnis, accusantium dignissimos unde quod commodi, exercitationem voluptatibus iusto ipsam beatae distinctio aut repudiandae rerum ea aperiam suscipit necessitatibus repellendus iure quo vitae! Repudiandae, corrupti sint? Cum, maxime! Corporis nam odio, aliquam est molestiae ipsa cupiditate reiciendis vitae libero laboriosam reprehenderit! Cum est placeat expedita, sapiente doloremque repellat corporis molestias tempora, atque quidem neque voluptatibus voluptas quis nihil id unde ea eos. Ipsa corrupti officia natus? Repudiandae sint ab asperiores, explicabo, nulla aut tempore minima ipsam corporis quisquam, ea consequatur ex totam? Esse laudantium quisquam perferendis nobis maiores accusantium magnam assumenda maxime, dolorum fugit laborum repudiandae quam consequatur beatae eveniet? Magni, fugit eaque possimus eum velit beatae expedita corrupti tempore animi reiciendis mollitia qui molestiae minus! Expedita cum totam repellat nisi, ullam cupiditate sit!</p>
            </div>
        </>
    )
}

export default ArticleCard