import axios from 'axios';
import React, { useState, useContext } from 'react';
import { AccountInfoContext } from '../accountContext';
import './AdminAccount.css'; // Import the CSS file

const AdminAccount: React.FC = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [companySecretKey, setCompanySecretKey] = useState('');
  const [password, setPassword] = useState('');
  const { setAccountInfo } = useContext(AccountInfoContext);

  const handleCreateAccount = async () => {
    try {
      const response = await axios.post('https://ecommerce-api-vhac.onrender.com/admin/auth/create-account/', {
        name,
        surname,
        email,
        companySecretKey,
        password,
      });
     console.log(response.data)
     window.localStorage.setItem("token", response.data.adminInfo.token);
     
    } catch (error: any) {
      console.error('Error creating account:', error.response.data.message);
    }
  };

  return (
    <div className="container">
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
      </form>
    </div>
  );
};

export default AdminAccount;
