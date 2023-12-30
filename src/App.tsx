import React, { useState  } from 'react';
import { AccountInfoContext } from './accountContext';
import AdminAccount from './Admin/CreateAccount';
import Login from './Admin/Login';

function App() {
  const [accountInfo, setAccountInfo] = useState()
  return (
    <div className="App">
      <AccountInfoContext.Provider value ={ [accountInfo , setAccountInfo]}>
        <AdminAccount/>
        <Login/>
      </AccountInfoContext.Provider>
    </div>
  );
}

export default App;
