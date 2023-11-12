import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Form, useNavigation, redirect } from 'react-router-dom';
import ProgressBar from '../components/ProgressBar';
import './AddArticle.css';
import PersonalTest from '../components/PersonalTest';
import OtherInfoTest from '../components/OtherInfoTest';
import OSignupTest from '../components/OSignupTest';


const AddArticle = () => {
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
const [page, setPage] = useState(0);
const FormTitles = ['Order Article', 'Choose quantity', 'Finish'];

const pageDisplay = () => {
  if (page === 0) { return <PersonalTest /> 
} else if(page === 1) {return <OtherInfoTest />}
else  {return <OSignupTest />

} 
}

const [formData, setFormData] = useState({
  email: "",
  password: "",
  confirmPassword: "",
})
  return (


    <div className='order'>
 <div className="input-container">
    
  <div className={`input-partition ${page === 0 ? 'active' : ''}`}>Order Article</div>
  <div className={`input-partition ${page === 1 ? 'active' : ''}`}>choose Quantity</div>
  <div className={`input-partition ${page === 2 ? 'active' : ''}`}>Payment</div>
  


    </div>

    <div>
   
    <Form>
      {pageDisplay()}
    </Form>

   <div className='navigate'>       
<button className={`${page === 0 ? 'button-container' : ''}`}
disabled = {page == 0}
onClick={() => {setPage((currentPage) => currentPage - 1)}}>
  {page == 0 ? '' : 'Prev'}
</button>
  <button 
  
  disabled = {page == FormTitles.length - 1} 
  onClick={() => 
  {setPage((currentPage) => currentPage + 1)}}>Next
    </button>
    </div>
   
 
  </div>

  </div>



















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
   
  );
}
export default AddArticle;


