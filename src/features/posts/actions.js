import { createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/client'

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
      const response = await client.get(`/api/posts`)
      const posts = response.data
      console.log("проверяем async 2 = ", posts)
      return posts
})