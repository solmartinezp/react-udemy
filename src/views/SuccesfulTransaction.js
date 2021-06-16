import { Link } from 'react-router-dom'; 

export default function SuccessfulTransaction() {
    return (
        <div>
            <h2>Transacción exitosa!</h2>
            <Link to="home">Back to Home</Link>
        </div>
    )
}