import { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';
import LoadingSpinner from '../components/LoadingSpinner';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts?_limit=50'
        );

        if (!response.ok) {
          throw new Error(`HTTP Fehler: ${response.status}`);
        }

        const data = await response.json();
        setPosts(data);

      } catch (err) {
        console.error('Fehler beim Laden:', err);
        setError(err.message);

      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <LoadingSpinner message="Lade Blog-Posts..." />;
  }

  if (error) {
    return (
      <div className="container">
        <div style={{ 
          padding: '20px', 
          background: '#fee', 
          color: '#c00', 
          borderRadius: '8px',
          textAlign: 'center' 
        }}>
          <h2>Fehler beim Laden</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">Blog Beiträge</h1>
      <p style={{ color: '#7f8c8d', marginBottom: '32px' }}>
        {posts.length} Artikel gefunden
      </p>
      
      <div className="posts-grid">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Posts;