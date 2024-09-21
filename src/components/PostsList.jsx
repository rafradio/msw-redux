import { useDispatch, useSelector } from 'react-redux';
import { selectPosts, selectEntities } from '../store/selectors';
import { Link } from 'react-router-dom'
import { ReactionButtons } from './ReactionButtons';

export const PostsList = () => {
    const posts = useSelector(selectPosts);
    const entt = useSelector(selectEntities);

    if (!posts) {
        return (
          <section>
            <h2>Post not found!</h2>
          </section>
        )
    }

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
