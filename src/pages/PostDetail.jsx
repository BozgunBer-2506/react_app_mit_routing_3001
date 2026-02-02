import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostAndUser = async () => {
      try {
        setLoading(true);
        setError(null);

        // 1. Post laden
        const postResponse = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );

        if (!postResponse.ok) {
          throw new Error('Post nicht gefunden');
        }

        const postData = await postResponse.json();
        setPost(postData);

        // 2. User (Autor) laden
        const userResponse = await fetch(
          `https://jsonplaceholder.typicode.com/users/${postData.userId}`
        );

        if (userResponse.ok) {
          const userData = await userResponse.json();
          setUser(userData);
        }

      } catch (err) {
        console.error('Fehler:', err);
        setError(err.message);

      } finally {
        setLoading(false);
      }
    };

    fetchPostAndUser();
  }, [postId]);

  if (loading) {
    return <LoadingSpinner message="Lade Artikel..." />;
  }

  if (error || !post) {
    return (
      <div className="container">
        <div style={{ 
          padding: '40px', 
          textAlign: 'center', 
          color: '#ef4444' 
        }}>
          <h2>Artikel nicht gefunden</h2>
          <p>Der Artikel mit der ID {postId} existiert nicht.</p>
          <Link to="/posts" style={{ color: '#38bdf8' }}>
            ← Zurück zur Übersicht
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <Link to="/posts" style={{ color: '#38bdf8' }}>
        ← Zurück zur Übersicht
      </Link>
      
      <div className="card" style={{ marginTop: '1rem' }}>
        <h1>{post.title}</h1>
        
        {user && (
          <div className="author-box">
            <span>Von: </span>
            <Link 
              to={`/users/${user.id}`} 
              style={{ color: '#38bdf8', fontWeight: 'bold' }}
            >
              {user.name}
            </Link>
          </div>
        )}
        
        <p style={{ fontSize: '1.2rem', color: '#cbd5e1', lineHeight: '1.8' }}>
          {post.body}
        </p>
      </div>
    </div>
  );
}

export default PostDetail;