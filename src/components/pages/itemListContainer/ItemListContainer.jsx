export default function ItemListContainer({greeting}) {
    const containerStyle = {
        padding: '20px',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
        textAlign: 'center',
        fontSize: '22px',
        fontWeight: 'bold',
      };


    return (
    <div style={containerStyle}>
      {greeting}
    </div>
    );
}

