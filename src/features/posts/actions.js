import { createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/client'

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
    //   const response = await client.get(`/api/posts`)
    //   const posts = response.data
      const response = await fetch(`/api/posts`)
      const data = await response.json()
    //   const posts = response.data
    //   console.log("проверяем async 2 = ", data)
      return data
})

export const fetchPostsDb = createAsyncThunk(
    'posts/fetchPostsDb',
    async () => {
    //   const response = await client.get(`/api/posts`)
    //   const posts = response.data
      const response = await fetch(`/api/db`)
      const data = await response.json()
    //   const posts = response.data
      console.log("проверяем async 2 = ", data)
      return data
})