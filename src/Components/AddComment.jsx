import {useEffect, useState} from 'react';
import "../Components-Styles/AddComment.css";
import axios from 'axios';

const AddComment = ({articleId, onSubmit}) => {
    const [comment, setComment] = useState("");
    const [user, setUser] = useState(null);
    useEffect(() => {
        axios.get(`https://backend-nc-news-l5zm.onrender.com/api/users/tickle122`).then((response) => {
            setUser(response.data.username);
        }).catch((error) => {
            console.error("error", error);
        })
    }, [])
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!user) {
            alert("You must be signed in to comment");
            return;
        };
        if (comment.length === 0) {
            alert("Commnts cannot be empty");
        };
        const newComment = {
            body: comment,
            username: user,
            created_at: new Date().getTime(),
            votes: 0,
            article_id: Number(articleId),
        };
        axios.post(`https://backend-nc-news-l5zm.onrender.com/api/articles/${articleId}/comments`, newComment).then((response) => {
            setComment("");
            onSubmit(response.data.comment);
        }).catch((error) => {
            console.error("error", error);
        });
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} placeholder='Type Comment...'/>
        <button type='submit'>Post Comment</button>
    </form>
  )
}

export default AddComment