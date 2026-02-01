import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(res => res.json())
      .then(data => {
        setPost(data);
        return fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`);
      })
      .then(res => res.json())
      .then(userData => setUser(userData));
  }, [postId]);

  if (!post) return <div className="container">Laden...</div>;

  return (
    <div className="container">
      <Link to="/posts" style={{ color: '#38bdf8' }}>← Zurück</Link>
      <div className="card" style={{ marginTop: '1rem' }}>
        <h1>{post.title}</h1>
        {user && (
          <div className="author-box">
            <span>Von: </span>
            <Link to={`/users/${user.id}`} style={{ color: '#38bdf8', fontWeight: 'bold' }}>
              {user.name}
            </Link>
          </div>
        )}
        <p style={{ fontSize: '1.2rem', color: '#cbd5e1' }}>{post.body}</p>
      </div>
    </div>
  );
}

export default PostDetail;