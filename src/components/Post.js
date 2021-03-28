export const Post = ({ post }) => {
  return (
    <div className="card">
      <div className="card-header">{post.category}</div>
      <img src={post.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.comment}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Made by {post.author}</small>
      </div>
    </div>
  );
};
