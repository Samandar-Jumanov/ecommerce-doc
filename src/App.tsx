import React, { useState  } from 'react';
import { AccountInfoContext } from './accountContext';
import AdminAccount from './Admin/AdminAccount';

function App() {
  const [accountInfo, setAccountInfo] = useState()
  return (
    <div className="App">
      <AccountInfoContext.Provider value ={ [accountInfo , setAccountInfo]}>
        <AdminAccount/>
      </AccountInfoContext.Provider>
    </div>
  );
}

export default App;
