import React, { useEffect, useState } from 'react';
import { Form, redirect, useNavigate, useNavigation } from 'react-router-dom';
import './AddArticle.css';
import OrderArticle from '../components/OrderArticle';
import Quantity from '../components/Quantity';
import TimeFrame from '../components/TimeFrame';
import customFetch from '../utils/customFetch';


const AddArticle = () => {
  const [page, setPage] = useState(0);
  const FormTitles = ['Order Article', 'Choose Quantity', 'Finish'];
  const [showArticles, setShowArticles] = useState(false);

  function NumberOArticles() {
    if (showArticles === '')
    setShowArticles(true);
  }
  const [formData, setFormData] = useState({
    title: "",
    keywords: "",
    description: "",
    numberOfArticles: 1,
    numOfWords: 0,
    totalCost: 0,
    duration: "",
  });

  const navigate = useNavigate();

  // Log form data whenever it changes
  useEffect(() => {
    console.log('Form Data (in AddArticle):', formData);
  }, [formData]);

  const pageDisplay = () => {
    switch (page) {
      case 0:
        return <OrderArticle 
        setFormData={setFormData} formData={formData}
        
        />;
      case 1:
        return <Quantity setFormData={setFormData} formData={formData} />;
      case 2:
        return <TimeFrame setFormData={setFormData} formData={formData} />;
      default:
        return null;
    }
  };

  const handlePrevClick = () => {
    setPage((currentPage) => currentPage - 1);
  };

  const handleNextClick = () => {
    setPage((currentPage) => currentPage + 1);
  };




  const handleSubmit = async () => {
    try {
      const data = formData;
      await customFetch.post('/articles', data);

      // Use the navigate function to navigate to the desired route
      navigate('/dashboard/all-articles');
    } catch (error) {
      console.error('Error submitting form:', error);

      // Check if the error has a response with more details
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
      }
    }
  };

  return (
    <div className='order'>
      <div className="input-container">
        {FormTitles.map((title, index) => (
          <div key={index} className={`input-partition ${page === index ? 'active' : ''}`}>
            {title}
          </div>
        ))}
      </div>

        <div>
          {pageDisplay()}
        </div>
        <Form>
          <div className='navigate'>
            <button
              className={`${page === 0 ? 'next-button' : ''}`}
              disabled={page === 0}
              
              onClick={handlePrevClick}
            >
              {page === 0 ? '' : 'Prev'}
            </button>
            <button
              className='next-button'
              
              onClick={page === FormTitles.length - 1 ? handleSubmit : handleNextClick}
type={page === FormTitles.length - 1 ? "submit" : "button"}

>
  
{page === FormTitles.length - 1 ? 'Submit' : 'Next'}

            </button>
          </div>
        </Form>
    </div>
  );
};

export default AddArticle;


// import "./AddArticle.css";
// import {
//   ARTICLE_TYPE,
//   ARTICLE_CATEGORY,
//   AUTHORS_TONE,
//   FREQUENCY_SUB,
//   PUBLISH,
//   QUANTITY,
// } from '../../../utils/constants';
// import customFetch from '../utils/customFetch';

// const AddArticle = () => {
//   const { user } = useOutletContext();
//   const navigation = useNavigation();
//   const isSubmitting = navigation.state === 'Loading...';

//   const [articleData, setArticleData] = useState({
//     articleType: ARTICLE_TYPE.ARTICLE,
//     articleCategory: ARTICLE_CATEGORY.TECHNOLOGY,
//     authorsTone: AUTHORS_TONE.NEUTRAL,
//     publishing: PUBLISH.NO,
//     frequency: FREQUENCY_SUB.DAILY,
//     quantity: QUANTITY.RANGE_START
//   });

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     // Send the articleData to the server using customFetch or another method.
//     // Add your form submission logic here.
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setArticleData({
//       ...articleData,
//       [name]: value,
//     });
//   };



//   const quantityOptions = [];
//   for (let i = QUANTITY.RANGE_START; i <= QUANTITY.RANGE_END; i++) {
//     quantityOptions.push(
//       <option key={i} value={i}>
//         {i}
//       </option>
//     );
//   }



    // <div>
    //   <Form method='post' className='add-article-form' onSubmit={handleFormSubmit}>
    //     <h4>Add Article</h4>
    //     <div className='center-form'>
    //       <label htmlFor='articleType'>Article Type:</label>
    //       <select
    //         name='articleType'
    //         value={articleData.articleType}
    //         onChange={handleInputChange}
    //       >
    //         {Object.values(ARTICLE_TYPE).map((type) => (
    //           <option key={type} value={type}>
    //             {type}
    //           </option>
    //         ))}
    //       </select>
    //       <label htmlFor='articleCategory'>Article Category:</label>
    //       <select
    //         name='articleCategory'
    //         value={articleData.articleCategory}
    //         onChange={handleInputChange}
    //       >
    //         {Object.values(ARTICLE_CATEGORY).map((category) => (
    //           <option key={category} value={category}>
    //             {category}
    //           </option>
    //         ))}
    //       </select>
    //       <label htmlFor='authorsTone'>Author Tone:</label>
    //       <select
    //         name='authorsTone'
    //         value={articleData.authorsTone}
    //         onChange={handleInputChange}
    //       >
    //         {Object.values(AUTHORS_TONE).map((tone) => (
    //           <option key={tone} value={tone}>
    //             {tone}
    //           </option>
    //         ))}
    //       </select>
    //       <label htmlFor='publishing'>Publish:</label>
    //       <select
    //         name='publishing'
    //         value={articleData.publishing}
    //         onChange={handleInputChange}
    //       >
    //         {Object.values(PUBLISH).map((publish) => (
    //           <option key={publish} value={publish}>
    //             {publish}
    //           </option>
    //         ))}
    //       </select>
    //       <label htmlFor='frequency'>Frequency:</label>
    //       <select
    //         name='frequency'
    //         value={articleData.frequency}
    //         onChange={handleInputChange}
    //       >
    //         {Object.values(FREQUENCY_SUB).map((frequency) => (
    //           <option key={frequency} value={frequency}>
    //             {frequency}
    //           </option>
    //         ))}
    //       </select>
    //       <label htmlFor='quantity'>Quantity:</label>
    //       <select
    //         name='quantity'
    //         value={articleData.quantity}
    //         onChange={handleInputChange}
    //       >
    //         {quantityOptions}
    //       </select>
    //     </div>
    //     <button type='submit' disabled={isSubmitting}>
    //       {isSubmitting ? 'Submitting...' : 'Submit'}
    //     </button>
    //   </Form>
    // </div>
  