import { Link } from 'react-router-dom';

function PostCard({ post }) {
  return (
    <div style={{ 
      padding: '20px', 
      margin: '20px 0', 
      border: '1px solid #ddd', 
      borderRadius: '8px' 
    }}>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}...</p>
      <Link to={`/posts/${post.id}`} style={{ color: '#3498db', fontWeight: 'bold' }}>
        Weiterlesen →
      </Link>
    </div>
  );
}

export default PostCard;