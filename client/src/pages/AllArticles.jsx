import React, { createContext, useContext } from 'react';
import customFetch from '../utils/customFetch';
import SearchContainer from './SearchContainer';
import { useLoaderData } from 'react-router-dom';
import ArticleContainer from './ArticleContainer';



export const loader = async () => {
  try {
    const {data} = await customFetch.get("/articles");
    return {data}
    
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
  const {data} = useLoaderData()

  return (
   <AllArticlesContext.Provider value={{data}}>
      <SearchContainer />
      <ArticleContainer />
    </AllArticlesContext.Provider>
  )
}

export const useAllArticlesContext = () => useContext(AllArticlesContext)

export default AllArticles
