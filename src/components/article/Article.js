// Import necessary modules
import React from 'react';
import "./Article.scss"
import { useAuth } from '../../components/context/authcontext';

// Create a functional component named Article which takes an article object as a prop
const Article = ({ article }) => {
    // Access articleLikes function from the auth context
    const { articleLikes } = useAuth()

    // Handle click event when the user clicks on the "Like" button
    const handleLikeClick = () => {
        // Create a formData object with the article title and url
        const formData = {
            title: article.title,
            url: article.url,
        };
        // Call the articleLikes function with the formData object
        articleLikes(formData)
    };

    // Return the JSX for the Article component
    return (
        <div className="article">
            <div>
                <a href={article.url}>
                    <div className="article-image">
                        <img src={article.urlToImage} alt={article.title} />
                    </div>
                </a>

                <div className="article-details">
                    <h3 className="article-title">{article.title}</h3>
                    <div className="article-buttons">
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            <button className="article-read-more">Read More</button>
                        </a>
                        <button className="article-like" onClick={handleLikeClick}>Like</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Export the Article component as the default export
export default Article;