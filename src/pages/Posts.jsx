import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=50')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div className="container">
      <h1 className="title">Blog Beiträge</h1>
      <div className="posts-grid">
        {posts.map(post => (
          <div key={post.id} className="card">
            <h2>{post.title}</h2>
            <Link to={`/posts/${post.id}`} className="btn">
              Weiterlesen
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;