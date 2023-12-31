import React from 'react'
import "./Article.css"
import day from 'dayjs';

import advancedFormat from 'dayjs/plugin/advancedFormat';
import ArticleInfo from './ArticleInfo';
import { FaBriefcase, FaCalendarAlt, FaLocationArrow } from 'react-icons/fa';
import { Form, Link } from 'react-router-dom';
day.extend(advancedFormat);


const Article = ({
    _id, title, description, keywords, numberOfArticles, numOfWords, totalCost, duration, createdAt, updatedAt
}) => {
    const date = day(createdAt).format('MM Do YYYY');
  return (
    <aside className='all'>  
    <div className='articles'>
    <header className='card-container'>
      {/* Left section */}
      <div className='left-section'>
        <h1 className='title'>Title:</h1> <span className=''>{title}</span>
        <p>{keywords}</p>
        <div className='description'>
          <h6 className='description'>Descripiton:</h6> <span className='desc'>{description}</span>
        </div>
      </div>
  
      {/* Vertical line */}
      <div className='vertical-line'></div>
  
      {/* Center section */}
      <div className='center-section'>
        <div><span className='duration'>Duration:  </span>{duration}</div>
        <span className='numOfWords'>Number of Words:
          </span>
          <div>{numOfWords}</div>
        <span className='numOfWords'>Number of Articles
          </span> 
          <div>{numberOfArticles}</div>

      </div>
  
      {/* Vertical line */}
      <div className='vertical-line' />
  
      {/* Right section */}
      <div className='right-section'>
        <p>{totalCost}</p>
        <p>{date}</p>
        <button className='edit-button'>
        <Link to={`../edit-article/${_id}`}>Edit</Link>
          
        </button>
          <Form method='post' action={`../delete-article/${_id}`}>
          <button className='delete-button'>
            Delete
            </button>
          </Form>
          <button className='read-more'>Read More</button>
      </div>
    </header>
  </div>
  <div className='horizontal-line' />

</aside>
   


  )
}

export default Article
