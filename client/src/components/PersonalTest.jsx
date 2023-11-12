import React from 'react'
import FormInput from './FormInput'

const PersonalTest = () => {
  return (
    <div>
      <div className='input-form'>
      <label for="description">Title:</label>
        <FormInput />
      <label for="description">Keywords:</label>
        <FormInput />

        <div class="description-form">
        <form>
      <label for="description">Description:</label>
      <textarea id="description" name="description" placeholder="Enter your description here..."></textarea>
    </form>
  </div>
      </div>
    </div>
  )
}

export default PersonalTest
