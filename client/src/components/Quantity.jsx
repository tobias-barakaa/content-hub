// import React, { useState, useEffect } from 'react';
// import './Quantity.css';

// const Quantity = ({formData, setFormData}) => {
//   const [numberOfWords, setNumberOfWords] = useState('');
//   const [numberOfArticles, setNumberOfArticles] = useState('');
//   const [totalCost, setTotalCost] = useState(0);

//   useEffect(() => {
//     calculate();
//   }, [numberOfWords, numberOfArticles]);

//   function calculate() {
//     const costPerWord = 5 / 300;
//     const total = (numberOfArticles * numberOfWords * costPerWord).toFixed(2);
//     setTotalCost(total);
//   }

  

//  return (
//     <div className="payment-form">
//       <label htmlFor="num-words">Number of Words:</label>
//       <input
//         type="number"
//         id="numberOfWords"
//         name="numberOfWords"
//         min="0"
//         value={numberOfWords}
//         onChange={(e) => setNumberOfWords(Math.max(0, parseInt(e.target.value, 10)))}
//         required
//       />

//       <label htmlFor="num-articles">Number of Articles:</label>
//       <input
//         type="number"
//         id="numberOfArticles"
//         name="numberOfArticles"
//          min="0"
//         value={numberOfArticles}
//         onChange={(e) => setNumberOfArticles(Math.max(0, parseInt(e.target.value, 10)))}
//         required
//       />

//       <div className="total-cost-box">
//         <p>Total Cost:</p>
//         <p>${totalCost}</p>
//       </div>
//     </div>
//   );
// };

// export default Quantity;

import React, { useState, useEffect } from 'react';
import './Quantity.css';


const Quantity = ({ formData, setFormData }) => {
    const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    calculate();
  }, [formData.numberOfWords, formData.numberOfArticles]);
  
  function calculate() {
    const costPerWord = 5 / 300;
    const total = (formData.numberOfArticles * formData.numberOfWords * costPerWord).toFixed(2);
    setTotalCost(total);

    setFormData((prevFormData) => ({
      ...prevFormData,
      totalCost: total,
    }));
  }
  

  // const handleInputChange = (key, value) => {
  //   if (value < 0) {
  //     return; // Don't allow negative numbers
  //   }

  //   if (key === 'numberOfWords') {
  //     setNumberOfWords(value);
  //     localStorage.setItem('numberOfWords', value);
  //   } else if (key === 'numberOfArticles') {
  //     setNumberOfArticles(value);
  //     localStorage.setItem('numberOfArticles', value);
  //   }

    
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [key]: value,
  //   }));
  // };

  return (
    <div className="payment-form">
      <label htmlFor="num-words">Number of Words:</label>
      <input
        type="number"
        id="numberOfWords"
        name="numberOfWords"
        min="0"
        placeholder="Enter the number of words..."
        value={formData.numberOfWords}
        onChange={(e) => {
          setFormData((prevFormData) => ({
            ...prevFormData,
            numberOfWords: Math.max(0, parseInt(e.target.value, 10)),
          }));
        }}
        

        required
      />

      <label htmlFor="num-articles">Number of Articles:</label>
      <input
        type="number"
        id="num-articles"
        name="num-articles"
        placeholder="Enter the number of articles..."
        min="0"
        value={formData.numberOfArticles}
        onChange={(e) => {
          setFormData((prevFormData) => ({
            ...prevFormData,
            numberOfArticles: Math.max(0, parseInt(e.target.value, 10)),
          }));
        }}
        required
      />

      <div className="total-cost-box">
        <p>Total Cost:</p>
        <p>${totalCost}</p>
      </div>
    </div>
  );
};

export default Quantity;

