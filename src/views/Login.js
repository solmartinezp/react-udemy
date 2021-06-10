import { useContext, useState } from 'react';
import UsersContext from '../context/users';


export default function Login() {
    // PROVIDER DE CONTEXT API
    const { getUser, user, isLoading, hasError, errorMessage } = useContext(UsersContext);
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
    
      const handleFormSubmit = (e) => {
        e.preventDefault();

        getUser(username).catch(null);

        if (user.username === username && user.password === password) {
            console.log('Logged in');
            localStorage.setItem(`${username}_id`, user.id);
        } else {
            console.log('Usuario o contraseña incorrecta!');
        }
      };

    return (
        <div>
            <h2>Login</h2>
            {isLoading ? <div>Cargando...</div> :
            <div>                
                <form onSubmit={handleFormSubmit}>
                    <label>
                        Usuario
                        <input 
                            type="text" 
                            value={username} 
                            onChange={handleUsernameChange}/>
                    </label>

                    <label>
                        Contraseña
                        <input type="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </label>

                    <button type="submit">Enviar</button>
                </form>
            </div>
        }
        </div>
    );
}