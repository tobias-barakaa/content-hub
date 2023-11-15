import React from 'react'
import { Form, redirect, useLoaderData, useNavigate, useNavigation, useParams } from 'react-router-dom'
import customFetch from '../utils/customFetch';
import './EditArticle.css';


export const loader = async ({params}) => {
  try {
const {data} = await customFetch.get(`/articles/${params.id}`);
  return data  
} catch (error) {
    return redirect('/dashboard/all-articles');
  }
}


export const action = async ({request, params}) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData)
  try {
    await customFetch.patch(`/articles/${params.id}`, data);
    return redirect('/dashboard/all-articles');
  } catch (error) {
    return error;
  }
}

const EditArticle = () => {
  const {article} = useLoaderData();
  const navigation = useNavigation()
  const loading = navigation.state === "loading"

  return (
    <div class="form-container">
    <h2>Update Data</h2>
    <Form method='post'>
      <div class="form-group">
        <label for="title">Title:</label>
        <input type="text" id="title" name="title"
        defaultValue={article.title}
         />
      </div>
      <div class="form-group">
        <label for="keywords">Keywords:</label>
        <input type="text" id="keywords" name="keywords"
         defaultValue={article.keywords} />
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea id="description" 
        name="description" defaultValue={article.description} />
      </div>
      <div class="form-group">
      <label for="duration">Duration:</label>
      <select
        id="duration"
        name='duration'
        defaultValue={article.duration}
        
      >
        {[1, 2, 3, 4, 5, 6, '1 week'].map((value) => (
          <option key={value} value={typeof value === 'number' ? `${value} days` : value}>
            {typeof value === 'number' ? `${value} days` : value}
          </option>
        ))}
      </select>
      </div>
      {/* <div class="form-group">
        <label for="duration">Duration:</label>
        <input type="text" id="duration" name="duration" value="2 days" />
      </div> */}
      <div class="form-group">
        <label for="numOfWords">Number of Words:</label>
        <input type="number"
        defaultValue={article.numOfWords}
        id="numOfWords" name="numOfWords" /> 
      </div>
      <div class="form-group">
        <label for="numberOfArticles">Number of Articles:</label>
        <input type="number" 
        id="numberOfArticles" name="numberOfArticles" 
        defaultValue={article.numberOfArticles}
         />
      </div>
      <div class="form-group">
        <label for="totalCost">Total Cost:</label>
        <input type="number" 
        id="totalCost" name="totalCost" 
        defaultValue={article.totalCost}
         />
       
      </div>
      <div class="form-group">
     
      <button type="submit" id="update"
      disabled={loading}
      >{loading ? "loading..." : 'Update'}</button>
      </div>
    </Form>
  </div>
  )
}

export default EditArticle
