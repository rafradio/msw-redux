import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectPosts, selectEntities } from '../store/selectors';
import { Link } from 'react-router-dom'
import { ReactionButtons } from './ReactionButtons';
import { fetchPosts } from '../features/posts/actions';

export const PostsList = () => {
    const posts = useSelector(selectPosts);
    // const entt = useSelector(selectEntities);
    const dispatch = useDispatch();

    if (!posts) {
        return (
          <section>
            <h2>Post not found!</h2>
          </section>
        )
    }

    useEffect(() => {
        console.log("from useeffect");
        dispatch(fetchPosts())
        // if (postStatus === 'idle') {
        //   dispatch(fetchPosts())
        // }
      }, [dispatch])

    const renderedPosts = posts.map(post => {
        return (
        <article className="post-excerpt" key={post.id}>
          <h3>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </h3>
          {/* <PostAuthor userId={post.user} /> */}
          <p className="post-content">{post.content.substring(0, 100)}</p>
          <ReactionButtons post={post} />
        </article>
        )
});

    return (
        <section className="posts-list">
          <h2>Posts</h2>
          {renderedPosts}
        </section>
      )
}
