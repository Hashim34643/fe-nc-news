import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';

const CommentsCard = () => {
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false);
    const [comment, setComment] = useState("");
    const { article_id } = useParams();

    const formatDate = (dateString) => {
        return format(new Date(dateString), "MMMM dd, yyyy HH:mm");
    };

    useEffect(() => {
        if (showComments) {
            axios.get(`https://backend-nc-news-l5zm.onrender.com/api/articles/${article_id}/comments`)
                .then((response) => {
                    setComments(response.data.comments);
                })
                .catch((error) => {
                    console.error("error", error);
                });
        }
    }, [article_id, showComments]);

    const handleComments = () => {
        setShowComments(!showComments);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!comment) {
            alert("Comments cannot be empty");
            return;
        }

        const newComment = {
            body: comment,
            username: "tickle122",
            created_at: new Date().getTime(),
            votes: 0,
            article_id: Number(article_id),
        };

        axios.post(`https://backend-nc-news-l5zm.onrender.com/api/articles/${article_id}/comments`, newComment)
            .then((response) => {
                setComments([response.data.comment, ...comments]);
                setComment("");
            })
            .catch((error) => {
                console.error("error", error);
            });
    };

    const handleDeleteComment = (commentId) => {
        axios.delete(`https://backend-nc-news-l5zm.onrender.com/api/comments/${commentId}`)
            .then(() => {
                setComments(comments.filter((comment) => comment.comment_id !== commentId));
            })
            .catch((error) => {
                console.error("error", error);
            });
    };

    return (
        <>
            <div className="comments">
                <button onClick={handleComments}>
                    {showComments ? "Hide comments" : "Show comments"}
                </button>
                {showComments && (
                    <>
                        <form onSubmit={handleSubmit}>
                            <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Type Comment..." />
                            <button type='submit'>Post Comment</button>
                        </form>
                        <ul>
                            {comments.map((comment) => (
                                <li key={comment.comment_id}>
                                    <p>Author: {comment.author}</p>
                                    <p>Created At: {formatDate(comment.created_at)}</p>
                                    <p>{comment.body}</p>
                                    <p>Votes: {comment.votes}</p>
                                    {comment.author === "tickle122" && (
                                        <button onClick={() => handleDeleteComment(comment.comment_id)}>Delete</button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </>
    );
};

export default CommentsCard;