const selectUsers = state => state.users
const selectPosts = state => state.posts.posts
const selectEntities = state => state.posts.entities


export { selectUsers, selectPosts, selectEntities }