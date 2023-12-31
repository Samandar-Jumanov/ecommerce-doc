import React, { useState  } from 'react';
import { AccountInfoContext } from './accountContext';
import AdminAccount from './Admin/CreateAccount';
import Login from './Admin/Login';
import { BrowserRouter as Router  , Routes , Route} from 'react-router-dom'
import ProductType from './Admin/ProductCase';
function App() {
  const [accountInfo, setAccountInfo] = useState();
  const [alert , setAlert  ] = useState();


  return (
    <div className="App">
      <AccountInfoContext.Provider value ={ [accountInfo , setAccountInfo ,alert , setAlert]}>
      < Router>
      <Routes>
          <Route path='/create-account'  element ={<AdminAccount/>}/>
          <Route path='/login-account'  element ={<Login/>}/>
          <Route path='/'  element ={<ProductType/>}/>

      </Routes>
      </Router>
      </AccountInfoContext.Provider>
    </div>
  );
}

export default App;
