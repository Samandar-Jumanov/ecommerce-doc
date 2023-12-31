import axios from 'axios';
import React, { useState, useContext } from 'react';
import { AccountInfoContext } from '../accountContext';
import './AdminAccount.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const AdminAccount: React.FC = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [companySecretKey, setCompanySecretKey] = useState('');
  const [password, setPassword] = useState('');
  const { setAccountInfo  } = useContext(AccountInfoContext);
  const [alert , setAlert] = useState();

  const navigate = useNavigate();

  const handleCreateAccount = async () => {
    try {
      const response = await axios.post('https://ecommerce-api-7sxd.onrender.com/admin/auth/create-account/', {
        name,
        surname,
        email,
        companySecretKey,
        password,
      });

     console.log(response.data)
     window.localStorage.setItem("token", response.data.adminInfo.token);
     window.localStorage.setItem("adminId", response.data.adminInfo.Id);
     setAccountInfo(response.data.adminIfo)
    //  setAccountInfo(response.data.accountInfo);
     setAlert(response.data.message);
     
    } catch (error: any) {
      setAlert(error)
      console.error('Error creating account:', error);
    }
  };

  return (
    <div className="container">
      <h1> {alert ?? alert }</h1>
      <h2>Create Account</h2>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Surname:
          <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Company Secret Key:
          <input type="text" value={companySecretKey} onChange={(e) => setCompanySecretKey(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="button" onClick={handleCreateAccount}>
          Create Account
        </button>
        <button type="button" onClick={()=> navigate('/login-account')}>
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminAccount;
