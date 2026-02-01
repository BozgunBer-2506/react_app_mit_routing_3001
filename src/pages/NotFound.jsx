import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '80px' }}>
      <h1 style={{ fontSize: '100px' }}>404</h1>
      <h2>Seite nicht gefunden</h2>
      <p>Die gesuchte Seite existiert leider nicht.</p>
      <Link to="/">Zur Startseite</Link>
    </div>
  );
}

export default NotFound;