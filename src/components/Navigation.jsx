import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/posts">Blog</Link>
    </nav>
  );
}

export default Navigation;