import { useState } from 'react';
import ListComponent from './components/listComponent/index';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Usuario: ' + email + ' Password: ' + password);
    // mandar a backend
  };

  return (
    <div className="App">
     <form onSubmit={handleFormSubmit}>
       <h2>Iniciar sesión</h2>

       <label>
         Correo
         <input type="email" value={email}
          onChange={handleEmailChange}
         />
       </label>

       <label>
         Contrasena
         <input type="password" value={password}
          onChange={handlePasswordChange}
         />
       </label>

       <button type="submit">
         Enter
       </button>
     </form>
     <ListComponent />
    </div>
  );
}

export default App;
