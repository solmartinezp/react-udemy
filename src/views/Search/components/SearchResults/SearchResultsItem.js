export default function SearchResultsItem({ name, email}) {
    return (
        <div style={{ backgroundColor: '#E8E7E7', textAlign: 'center', marginBottom: '1rem', marginTop: 5, padding: 10, width: '80%' }}>
        <p>{name}</p>
        <p>{email}</p>
    </div>
    );
};