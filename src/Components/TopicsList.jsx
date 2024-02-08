import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
  
    return (
      <div>
        <h2>Trending Topics:</h2>
        <ul>
          {topics.map((topic) => (
            <li key={topic.slug}>
              <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default TopicsList;