import { Post } from './Post';
import { connect } from 'react-redux';

const MyPosts = ({ posts }) => {
  if (!posts.length) {
    return <h1>Nothing...</h1>;
  }

  return (
    <div className="card-deck">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.MyPosts,
  };
};

export default connect(mapStateToProps)(MyPosts);
