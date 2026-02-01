import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

function UserProfile() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserAndPosts = async () => {
      try {
        setLoading(true);
        const [userRes, postsRes] = await Promise.all([
          fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
          fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        ]);

        const userData = await userRes.json();
        const postsData = await postsRes.json();

        setUser(userData);
        setPosts(postsData);
      } catch (error) {
        console.error("Fehler:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserAndPosts();
  }, [userId]);

  if (loading) return <LoadingSpinner message="Profil wird geladen..." />;
  if (!user) return <div>Benutzer nicht gefunden.</div>;

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/posts" style={{ color: '#3498db', textDecoration: 'none' }}>← Zurück zum Blog</Link>
      
      <div style={{ marginTop: '30px', padding: '30px', border: '1px solid #ddd', borderRadius: '12px' }}>
        <h1>{user.name}</h1>
        <p style={{ color: '#7f8c8d' }}>@{user.username}</p>
        <p><strong>E-Mail:</strong> {user.email}</p>
        <p><strong>Firma:</strong> {user.company?.name}</p>
        <p><strong>Stadt:</strong> {user.address?.city}</p>
      </div>

      <h2 style={{ marginTop: '40px' }}>Artikel von {user.name}</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts.map(post => (
          <li key={post.id} style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>
            <Link to={`/posts/${post.id}`} style={{ color: '#3498db', textDecoration: 'none' }}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfile;