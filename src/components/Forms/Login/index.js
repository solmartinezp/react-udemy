import { useState, useContext } from 'react';
import UsersContext from '../../../context/users';
import { Redirect } from 'react-router-dom'; 
import './style.css';

export default function LoginForm() {
    // PROVIDER DE CONTEXT API
    const { getUser, user } = useContext(UsersContext);
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    if (localStorage.getItem('loggedUser')) {
        return <Redirect to="/home" /> 
    }

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
            localStorage.setItem('loggedUser', user.id); // acá se guarda el token en el storage
            return <Redirect to="/home" />;
        } else {
            console.log('Usuario o contraseña incorrecta!');
        }
      };

    return (
        <div className="mainView" >
            <form onSubmit={handleFormSubmit} className="form" >
                <label className="label" >
                    Usuario
                    <input 
                        type="text" 
                        value={username} 
                        onChange={handleUsernameChange}/>
                </label>

                <label  className="label">
                    Contraseña
                    <input type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </label>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}