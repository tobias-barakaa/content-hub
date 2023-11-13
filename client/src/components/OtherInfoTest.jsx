import React, { useState } from 'react'
import './OtherInfoTest.css';

const OtherInfoTest = () => {
   const [numberOfwords, setNumberOfwords] = useState('');
   const [numberOfArticles, seNumberOfArticles] = useState('');
   const [numberOfArticle, seNumberOfArticle] = useState(null);


   function calculate()  {

    const costPerWord = 5 / 300;

    const total = numberOfArticles * numberOfwords * costPerWord;
    return total.toFixed(2)
    
   }

   
  
    return (
      <div className="payment-form">
        <label htmlFor="num-words">Number of Words:</label>
        <input
          type="number"
          id="num-words"
          name="num-words"
          placeholder="Enter the number of words..."
          value={numberOfwords}
         onChange={e => setNumberOfwords(e.target.value)}
          required
        />
  
        <label htmlFor="num-articles">Number of Articles:</label>
        <input
          type="number"
          id="num-articles"
          name="num-articles"
          placeholder="Enter the number of articles..."
          value={numberOfArticles}
         onChange={e => seNumberOfArticles(e.target.value)}

          required
        />
     <div className="total-cost-box">
          <p>Total Cost:</p>
          
          <p>$
          {calculate()}
          </p>
        </div>
    
  
      
      </div>
    );
  
}

export default OtherInfoTest
