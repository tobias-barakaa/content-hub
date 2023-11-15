import React from 'react'
import customFetch from '../utils/customFetch'
import { redirect } from 'react-router-dom'


export const action = async({params}) => {
    try {
        await customFetch.delete(`/articles/${params.id}`)
    } catch (error) {
        throw error
    }
    return redirect('/dashboard/all-articles')

}
