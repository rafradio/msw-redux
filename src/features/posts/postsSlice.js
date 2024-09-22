import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'
import { fetchPosts, fetchPostsDb } from './actions'


const initialReactions = {
    thumbsUp: 0,
    tada: 0,
    heart: 0,
    rocket: 0,
    eyes: 0
}

const initialState =  {
    posts: [
        { id: '1', title: 'First Post!', user: '0', content: 'Hello!', date: sub(new Date(), { minutes: 10 }).toISOString(), reactions: initialReactions, },
        { id: '2', title: 'Second Post', user: '2', content: 'More text', date: sub(new Date(), { minutes: 5 }).toISOString(), reactions: initialReactions, },
        { id: '3', title: 'Third Post', user: '0', content: 'More text', date: sub(new Date(), { minutes: 8 }).toISOString(), reactions: initialReactions, },
    ],
    entities: [],
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        reactionAdded: (state, action) => {
            const { postId, reaction } = action.payload
            const existingPost = state.posts.find(post => post.id == postId)
            if (existingPost) {
                existingPost.reactions[reaction]++
              }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.fulfilled, (state, action) => {
                action.payload.forEach(element => {
                    state.posts.push(element)
                });
            })
            .addCase(fetchPostsDb.fulfilled, (state, action) => {
                action.payload.forEach(element => {
                    console.log("Проверяем DB запрос", element);
                    state.posts.push(element)
                });
            })
    },
})

export const { reactionAdded } = postsSlice.actions

export default postsSlice.reducer