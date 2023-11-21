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
  }, [formData.numOfWords, formData.numberOfArticles]);
  
  function calculate() {
    const costPerWord = 5 / 300;
    const total = (formData.numberOfArticles * formData.numOfWords * costPerWord).toFixed(2);
    setTotalCost(total);

    setFormData((prevFormData) => ({
      ...prevFormData,
      totalCost: total,
    }));
  }


  return (
    <div className="payment-form">
      <label htmlFor="num-words">Number of Words:</label>
      <div className='form-group'>
      <input
        type="number"
        id="numOfWords"
        name="numOfWords"
        min="0"
        placeholder="Enter the number of words..."
        value={formData.numOfWords}
        onChange={(e) => {
          setFormData((prevFormData) => ({
            ...prevFormData,
            numOfWords: Math.max(0, parseInt(e.target.value, 10)),
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
            numberOfArticles: Math.max(1, parseInt(e.target.value, 10)),
          }));
        }}
        required
      />
</div>
      <div className="total-cost-box">
        <p>Total Cost:</p>
        <p>${totalCost}</p>
      </div>
    </div>
  );
};

export default Quantity;

