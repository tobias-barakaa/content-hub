import React from 'react';
import Article from './Article';
import { useAllArticlesContext } from './AllArticles';
import './ArticleContainer.css';

const ArticleContainer = () => {
  const { data } = useAllArticlesContext();

  // Check if data is undefined or null
  if (!data) {
    return (
      <div>
        <h2>Loading...</h2> {/* or another loading indicator/message */}
      </div>
    );
  }

  const { article } = data; // Use "article" instead of "articles"

  // Check if article is undefined or null
  if (!article || article.length === 0) {
    return (
      <div>
        <h2>No Articles to display. Start by adding some articles!</h2>
      </div>
    );
  }

  return (
    <>
      <div className=''>
        {article.map((article) => (
          <Article key={article._id} {...article} />

        ))}
      </div>
    </>
  );
};

export default ArticleContainer;
