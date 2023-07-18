import P from 'prop-types';

import './styles.css';

import { PostCard } from '../PostCard';

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard key={post.id} title={post.title} body={post.body} id={post.id} cover={post.cover} />
    ))}
  </div>
);

// a instrução abaixo é semelhante ao parâmetro passado na linha 7 { posts = []},
// podendo ser passado ou um ou outro.
// na linha 7 pode ser mantido da seguinte forma { posts}.
Posts.defaultProps = {
  posts: [],
};

/* Posts.propTypes = {
  posts: P.array,
}; */
Posts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      cover: P.string.isRequired,
      body: P.string.isRequired,
      id: P.number.isRequired,
    }),
  ),
};
