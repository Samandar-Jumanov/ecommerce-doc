import React, { useEffect, useState } from "react"
import * as functions from './function'


interface  Data  {
  Id : number ,
  productCaseName : string ,
   adminId : number 
};


const App =  ()  => {
  const [allProductType , setAllProductType ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const data = await functions.getAllProductTypes();
            setAllProductType(data.data);
        } catch (error : any) {
            // Handle the error, e.g., log it or show a message to the user
            console.error(error.message);
        }
    };

    fetchData(); // Call the async function immediately

}, []);



     return (
      <div className="main">
        {/* {allProductType.map((each : Data ) =>{
          return (
              <div key={each.Id}> 
                  <h1>{each.productCaseName}</h1>
                   <h1>{each.adminId}</h1>
                   <button onClick={functions.deleteProductCase}>Delete product case </button>
              </div>
          )
        })} */}
       
       <button onClick={functions.createProductCase}>Create new product case </button>
       <button onClick={functions.updateProductCase}>Update product case </button>

      </div>
     )
}

export default App;
