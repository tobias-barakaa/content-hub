import React, { useState, useEffect } from 'react';

const OrderArticle = ({ formData, setFormData }) => {
  // const [title, setTitle] = useState(localStorage.getItem('title') || '');
  // const [keywords, setKeywords] = useState(localStorage.getItem('keywords') || '');
  // const [description, setDescription] = useState(localStorage.getItem('description') || '');

  // useEffect(() => {
  //   // Persist data to localStorage when title, keywords, or description change
  //   localStorage.setItem('title', title);
  //   localStorage.setItem('keywords', keywords);
  //   localStorage.setItem('description', description);

  //   // Cleanup function
  //   return () => {
  //     // Optional: You can clear localStorage here if needed
  //   };
  // }, [title, keywords, description]);

  // const handleTitleChange = (e) => {
  //   setTitle(e.target.value);
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     title: e.target.value,
  //   }));
  // };

  // const handleKeywordsChange = (e) => {
  //   setKeywords(e.target.value);
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     keywords: e.target.value,
  //   }));
  // };

  // const handleDescriptionChange = (e) => {
  //   setDescription(e.target.value);
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     description: e.target.value,
  //   }));
  // };

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
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
            />

            <label htmlFor="keywords">Keywords:</label>
            <input
              type="text"
              id="keywords"
              name="keywords"
              placeholder="Enter keywords separated by commas..."
              value={formData.keywords}
              onChange={(e) => setFormData({...formData, keywords: e.target.value})}
           />

            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter your description here..."
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            ></textarea>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderArticle;
