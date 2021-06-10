import { useState } from 'react';
import UsersContext from './index';
import abstractService from '../../services/abstractService';

export default function UsersProvider({ children }) {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading]= useState(false);
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const getUser = async (userN) => {
        try {
            setIsLoading(true);
            setHasError(false);
            setErrorMessage('');
            //Acá tendría que hacer un get buscando al usuario que le llega por paráemtro
            const loginResult = await abstractService({
                url: `https://60c27556917002001739d031.mockapi.io/api/users/`,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                  }
            });
            setUser(loginResult[0]);
        } catch(error) {
            setUser({});
            setHasError(true);
            setErrorMessage('Algo ha pasado, verifica tu conexión');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <UsersContext.Provider value={{ 
            user,
            getUser,
            isLoading,
            hasError,
            errorMessage
        }} >
            {children}
        </UsersContext.Provider>
    );
}