import Auth from '../Auth/Auth';
import './Login.css';

function Login({onLogin}) {
  return (
    <Auth onLogin={onLogin} />
  );
}

export default Login;