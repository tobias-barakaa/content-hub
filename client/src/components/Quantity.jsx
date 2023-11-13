import React, { useState, useEffect } from 'react';
import './Quantity.css';

const Quantity = () => {
  const [numberOfWords, setNumberOfWords] = useState('');
  const [numberOfArticles, setNumberOfArticles] = useState('');
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    calculate();
  }, [numberOfWords, numberOfArticles]);

  function calculate() {
    const costPerWord = 5 / 300;
    const total = (numberOfArticles * numberOfWords * costPerWord).toFixed(2);
    setTotalCost(total);
  }
 

  return (
    <div className="payment-form">
      <label htmlFor="num-words">Number of Words:</label>
      <input
        type="number"
        id="num-words"
        name="num-words"
        min="0"
        placeholder="Enter the number of words..."
        value={numberOfWords}
        onChange={(e) => setNumberOfWords(Math.max(0, parseInt(e.target.value, 10)))}
        required
      />

      <label htmlFor="num-articles">Number of Articles:</label>
      <input
        type="number"
        id="num-articles"
        name="num-articles"
        placeholder="Enter the number of articles..."
        min="0"
        value={numberOfArticles}
        onChange={(e) => setNumberOfArticles(Math.max(0, parseInt(e.target.value, 10)))}
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
