import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '80px 20px' }}>
      <h1 style={{ fontSize: '48px' }}>Willkommen zum Blog</h1>
      <p style={{ fontSize: '20px', color: '#7f8c8d', marginBottom: '40px' }}>
        Entdecke interessante Artikel und lerne React Router.
      </p>
      <Link to="/posts" style={{ 
        padding: '16px 32px', 
        background: '#3498db', 
        color: 'white', 
        textDecoration: 'none', 
        borderRadius: '8px' 
      }}>
        Beiträge lesen
      </Link>
    </div>
  );
}

export default Home;