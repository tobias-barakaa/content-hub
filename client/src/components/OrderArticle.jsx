import React, { useState, useEffect } from 'react';

const OrderArticle = () => {
  const [title, setTitle] = useState(localStorage.getItem('title') || '');
  const [keywords, setKeywords] = useState(localStorage.getItem('keywords') || '');
  const [description, setDescription] = useState(localStorage.getItem('description') || '');

  useEffect(() => {
    return () => {
      localStorage.setItem('title', title);
      localStorage.setItem('keywords', keywords);
      localStorage.setItem('description', description);
    };
  }, [title, keywords, description]);

  return (
    <div>
      <div>
        <div className="description-form">
          <form>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label htmlFor="keywords">Keywords:</label>
            <input
              type="text"
              id="keywords"
              name="keywords"
              placeholder="Enter keywords separated by commas..."
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
            />

            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter your description here..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderArticle;
