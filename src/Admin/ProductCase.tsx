import React  , {useState , useEffect} from "react"
import axios from 'axios'
const ProductType : React.FC = () =>{
    const [allProductTypes , setAllProductTypes ] = useState([]) 

   useEffect(()=>{
     (async function fecthProductType() {
        try {
            const response = await axios.get('https://ecommerce-api-7sxd.onrender.com/admin/product-cases/all')
            console.log(response.data)
            setAllProductTypes(response.data.productCasesData);

         } catch (error : any ) {
            console.log(error.message)
         }
     })();

   } , [])

return (
    <div>
      {allProductTypes.map((each : any  ) =>{
       return (
        <div key={each.Id}>
            <h1>{each}</h1>
         </div>
       )
      })}
    </div>
)

}


export default ProductType 