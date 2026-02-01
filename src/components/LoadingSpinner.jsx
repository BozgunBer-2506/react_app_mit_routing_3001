function LoadingSpinner({ message = 'Laden...' }) {
  return (
    <div style={{ textAlign: 'center', padding: '60px' }}>
      <div className="spinner" style={{
        width: '40px',
        height: '40px',
        border: '4px solid #f3f3f3',
        borderTop: '4px solid #3498db',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        margin: '0 auto'
      }}></div>
      <p style={{ marginTop: '16px', color: '#7f8c8d' }}>{message}</p>
    </div>
  );
}

export default LoadingSpinner;