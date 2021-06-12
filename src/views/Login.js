import { useContext } from 'react';
import UsersContext from '../context/users';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import LoginForm from '../components/Forms/Login';


export default function Login() {
    // PROVIDER DE CONTEXT API
    const { isLoading, hasError, errorMessage } = useContext(UsersContext);

    return (
        <div>
            <h2>Login</h2>
            {isLoading ? 
                <Loading title="Cargando..." /> : 
                ( hasError ? <ErrorMessage message={errorMessage} /> : <LoginForm /> )
            }
        </div>
    );
}