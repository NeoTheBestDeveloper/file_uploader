import { Post } from './Post';

export const AllPosts = ({ posts }) => {
  return (
    <div className="card-deck">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};
