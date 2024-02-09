import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../Components-Styles/TopicsList.css"

const TopicsList = () => {
    const [topics, setTopics] = useState([]);
  
    useEffect(() => {
      axios
        .get("https://backend-nc-news-l5zm.onrender.com/api/topics")
        .then((response) => {
            console.log(response.data)
          setTopics(response.data);
        })
        .catch((error) => {
          console.error("Error fetching topics:", error);
        });
    }, []);

    if (topics.length === 0) {
        return <div>Loading...</div>;
    }
    return (
      <div>
        <h2>Trending Topics:</h2>
        <ul className='topicss-list'>
          {topics.map((topic) => (
            <li key={topic.slug}>
              <Link to={`/topics/${topic.slug}`} className='topics-list-link'>{topic.slug}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default TopicsList;