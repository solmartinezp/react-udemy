import './App.css';
import './App.css';
import Routes from './routes';
import UsersProvider from './context/users/Provider';

function App() {
  return (
    <UsersProvider>
      <Routes />
    </UsersProvider>
  );
}


export default App;
