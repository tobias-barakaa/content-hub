import React from 'react'
import FormInput from './FormInput'

const OrderArticle = () => {
  return (
    <div>
      <div>
     

        <div className="description-form">
        <form>
        <label for="title">Title:</label>
      <input type="text" id="title" name="title" placeholder="Enter the title..." />


        <label for="keywords">Keywords:</label>
      <input type="text" id="keywords" name="keywords" placeholder="Enter keywords separated by commas..." />

      <label for="description">Description:</label>
      <textarea id="description" name="description" placeholder="Enter your description here..."></textarea>
    </form>
  </div>
      </div>
    </div>
  )
}

export default OrderArticle
