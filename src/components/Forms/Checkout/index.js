import { useState } from 'react';
import { Redirect } from 'react-router-dom'; 
import './style.css';
import abstractService from '../../../services/abstractService';
import Loading from '../../Loading';
import ErrorMessage from '../../ErrorMessage';

export default function CheckoutForm() {
    const [amount, setAmount] = useState('');
    const [docType, setDocType] = useState('');
    const [docNumber, setDocNumber] = useState('');
    const [email, setEmail] = useState('');

    const [isLoading, setIsLoading]= useState(false);
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [response, setResponse] = useState(false);

    const handleChange= (event, set) => {
        set(event.target.value);
    }

    const buildedBody = () => {
        return {
            total: amount,
            doc_type: docType,
            doc_number: docNumber,
            email
        }
    };
    
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const body= buildedBody();

        try {
            setIsLoading(true);
            setHasError(false);
            setErrorMessage('');
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer 3ba16c9a-4b60-47ed-8643-1cec1623da81");
            myHeaders.append("Content-Type", "application/json");

            const checkoutResponse = await abstractService({
                url: 'https://bff-web-develop-ktkrfk2mma-uc.a.run.app/transactions/create',
                method: 'post',
                body : JSON.stringify(body),
                headers: myHeaders
            });

            console.log(checkoutResponse);
            setResponse(true);
            // redirigir a la url de la respuesta

        } catch(error) {
            setHasError(true);
            setErrorMessage('Algo ha pasado, verifica tu conexión');
        } finally {
            setIsLoading(false);
        }
        
    };

    if (response) {
        return <Redirect to="successful_transaction" />;
    }

    return (
        <div>
            {isLoading ? <Loading title="Cargando..." /> : (hasError ? <ErrorMessage message={errorMessage} /> : 
            <form onSubmit={handleFormSubmit} className="form">
                <label >
                    Amount:
                    <input 
                        type="text" 
                        value={amount} 
                        onChange={(e) => handleChange(e, setAmount)}/>
                </label>

                <label>
                    Document Type:
                    <select
                        value={docType}
                        onChange={(e) => handleChange(e, setDocType)}
                    >
                        <option value="DNI" >DNI</option>
                        <option value="CUIT">CUIT/CUIL</option>
                    </select>
                </label>

                <label>
                    Document Number:
                    <input type="text"
                        value={docNumber}
                        onChange={(e) => handleChange(e, setDocNumber)}
                    />
                </label>

                
                <label>
                    Email:
                    <input type="text"
                        value={email}
                        onChange={(e) => handleChange(e, setEmail)}
                    />
                </label>

                <button type="submit">Enviar</button>
            </form>
            )}
        </div>
    );
}