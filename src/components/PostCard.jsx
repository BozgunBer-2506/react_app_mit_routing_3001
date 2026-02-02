import { Link } from 'react-router-dom';

function PostCard({ post }) {
  const excerpt = post.body.length > 150 
    ? post.body.substring(0, 150) + '...' 
    : post.body;

  return (
    <div style={{ 
      padding: '24px',
      background: '#1e293b',
      border: '2px solid #334155',
      borderRadius: '12px',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.borderColor = '#3b82f6';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.borderColor = '#334155';
    }}
    >
      <h3 style={{ 
        color: '#ffffff',
        marginBottom: '12px',
        fontSize: '1.25rem'
      }}>
        {post.title}
      </h3>
      
      <p style={{ 
        color: '#94a3b8',
        lineHeight: '1.6',
        marginBottom: '16px'
      }}>
        {excerpt}
      </p>
      
      <Link 
        to={`/posts/${post.id}`} 
        style={{ 
          color: '#3b82f6',
          fontWeight: '600',
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px'
        }}
      >
        Weiterlesen →
      </Link>
    </div>
  );
}

export default PostCard;