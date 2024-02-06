import {useState} from 'react'
import "../Components-Styles/Votes.css"

const Votes = ({votes}) => {
    const [votesCount, setVotes] = useState(votes);
    const handleUpVote = () => {
        setVotes(prevVotes => prevVotes + 1);
    };
    const handleDownVote = () => {
        setVotes(prevVotes => prevVotes - 1);
    };
  return (
    <div className="votes-container">
        <p>Votes: {votesCount}</p>
        <button onClick={handleUpVote} className='upvote-button'>+</button>
        <button onClick={handleDownVote} className='downvote-button'>-</button>
    </div>
  )
}

export default Votes