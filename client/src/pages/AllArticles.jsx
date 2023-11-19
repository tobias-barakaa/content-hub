import React, { createContext, useContext } from 'react';
import customFetch from '../utils/customFetch';
import SearchContainer from './SearchContainer';
import { useLoaderData } from 'react-router-dom';
import ArticleContainer from './ArticleContainer';
import './AllArticles.css';



export const loader = async ({request}) => {
  console.log(request.url);
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ])
  console.log(params);
  try {
    const {data} = await customFetch.get("/articles", {
      params,
    });
    
    return {data, searchValues:{...params}}
    
  } catch (error) {
    console.error("Error retrieving articles:", error);
    if (error.response) {
      console.error("Response data:", error.response.data.msg);
      console.error("Response status:", error.response.status);
    }
    
  }
}

const AllArticlesContext = createContext();
const AllArticles = () => {
  const {data, searchValues} = useLoaderData()

  return (
   <AllArticlesContext.Provider value={{data, searchValues}}>
    
    <SearchContainer />
      <ArticleContainer />
     
      
    </AllArticlesContext.Provider>
  )
}

export const useAllArticlesContext = () => useContext(AllArticlesContext)

export default AllArticles
