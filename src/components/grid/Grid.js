import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Article from '../article/Article';
import './Grid.scss'

const NewsGrid = () => {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = '6355cb68533e49dcb7d0010df3c03ce5';
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${apiKey}`);
      setArticles(response.data.articles);
    };

    fetchNews();
  }, []);

  const handleNextClick = () => {
    if (currentIndex + 6 < articles.length) {
      setCurrentIndex(currentIndex + 6);
    }
  };

  const handlePreviousClick = () => {
    if (currentIndex - 6 >= 0) {
      setCurrentIndex(currentIndex - 6);
    }
  };

  return (
    <div className="news-grid">
      
      <div className="grid-container">
        {articles.slice(currentIndex, currentIndex + 6).map(article => (
          <Article key={article.title} article={article} />
        ))}
      </div>
      <div className="navigation">
        <a href="#" onClick={handlePreviousClick}>
          &lt; Previous
        </a>
        <a href="#" onClick={handleNextClick}>
          Next &gt;
        </a>
      </div>
    </div>
  );
};

export default NewsGrid;