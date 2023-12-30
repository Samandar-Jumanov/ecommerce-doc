import React, { useState , useContext } from 'react';
import axios from 'axios';
import { AccountInfoContext } from '../accountContext';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companySecretKey, setCompanySecretKey] = useState('');
  const { setAccountInfo } = useContext(AccountInfoContext);
  const navigate = useNavigate();

   
  const handleLogin = async () => {
    try {
      const response = await axios.post('https://ecommerce-api-vhac.onrender.com/admin/auth/account-login/', {
        email,
        password,
        companySecretKey,
      });
      console.log('Login successful', response.data);
      setAccountInfo(response.data.accountInfo);

    } catch (error : any ) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          Company Secret Key:
          <input
            type="text"
            value={companySecretKey}
            onChange={(e) => setCompanySecretKey(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleLogin}>
          Login
        </button>

        <button type="button" onClick={() => navigate('/create-account')}>
          Create account 
        </button>
      </form>
    </div>
  );
};

export default Login;
