import {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const CommentsCard = () => {
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false);
    const {article_id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (showComments) {
            axios.get(`https://backend-nc-news-l5zm.onrender.com/api/articles/${article_id}/comments`).then((response) => {
                setComments(response.data.comments);
            }).catch((error) => {
                console.error("error", error);
            })
        };
    }, [article_id, showComments]);
    const handleComments = () => {
        setShowComments(!showComments);
        if (!showComments) {
            navigate(`/article/${article_id}/comments`);
        } else {
            navigate(`/article/${article_id}`);
        }
    }
  return (
    <>
    <div className="comments">
        <button onClick={handleComments}>{showComments ? "Hide comments" : "Show comments"}</button>
        {showComments && (
            <ul>
                {comments.map((comment) => (
                    <li key={comment.comment_id}>
                        <p>{comment.author}</p>
                        <p>{comment.created_at}</p>
                        <p>{comment.body}</p>
                        <p>Votes: {comment.votes}</p>
                    </li>
                ))}
            </ul>
        )}
    </div>
    </>
  )
}

export default CommentsCard