import React from 'react'
import "./Article.css"
import day from 'dayjs';

import advancedFormat from 'dayjs/plugin/advancedFormat';
import ArticleInfo from './ArticleInfo';
day.extend(advancedFormat);


const Article = ({
    _id, title, description, keywords, numberOfArticles, numOfWords, totalCost, duration, createdAt, updatedAt
}) => {
    const date = day(createdAt).format('MM Do YYYY');
  return (
    // <div className='articles'>
    //     <header>
    //         <h2>{title}</h2>
    //         <div className='description'>
    //         <p>{description}</p>

    //         </div>
    //         <p>{keywords}</p>
    //         <p>{numberOfArticles}</p>
    //         <p>{numOfWords}</p>
    //         <p>{totalCost}</p>
    //         <p>{duration}</p>
    //         <p>{date}</p>
    //         <ArticleInfo _id={_id} />
    //     </header>
    // </div>

//     <div className='articles container'>
  
//     <div className='left-column'>
//       <div className='titl'>{title}</div>
//       <p>{keywords}</p>
         
//     </div>
//     <div className='right-column'>
//       <button>Delete</button>
//       <button>Edit</button>
//     </div>
 
// </div>
<div className="article-cards-container">
    <header>
    <div className="article-card__header">
      <h2 className="article-card__title">{title}</h2>
      <p className="article-card__keyword">{keywords}</p>
      <p className="article-card__time">{duration}</p>
    </div>
    </header>
    <div className='contentt'>
        <ArticleInfo text={description} />
        <ArticleInfo text={numberOfArticles} />
        <ArticleInfo text={numOfWords} />
    </div>
    <div className="article-card__buttons">
      <button className="article-card__button article-card__button--edit">Edit</button>
      <button className="article-card__button article-card__button--delete">Delete</button>
  </div>
  </div>

  )
}

export default Article
