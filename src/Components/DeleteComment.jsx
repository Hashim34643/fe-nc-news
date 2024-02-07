import {useState} from 'react';
import axios from 'axios';

const DeleteComment = ({commentId, onDelete}) => {
    const [deleteComment, setDeleteComment] = useState(false);
    const handleDelete = () => {
        setDeleteComment(true);
        axios.delete(`https://backend-nc-news-l5zm.onrender.com/api/comments/${commentId}`).then((response) => {
            setDeleteComment(false);
            onDelete(commentId);
        }).catch((error) => {
            setDeleteComment(false);
            console.error("error", error);
        });

    }
  return (
    <div className="delete-comment">
        { deleteComment ? (
            <p>Loading...</p>
        ) : (
            <button onClick={handleDelete}>Delete</button>
        )}
    </div>
  )
}

export default DeleteComment