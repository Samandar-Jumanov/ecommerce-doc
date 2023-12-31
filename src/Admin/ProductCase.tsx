import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductType: React.FC = () => {
  const [allProductTypes, setAllProductTypes] = useState([]);
  const [productCaseName, setProductCaseName] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    (async function fetchProductType() {
      try {
        const response = await axios.get(
          "https://ecommerce-api-7sxd.onrender.com/admin/product-cases/all"
        );
        console.log(response.data);
        setAllProductTypes(response.data.productCasesData);
      } catch (error: any) {
        console.log(error.message);
      }
    })();
  }, []);

  const createProductCases = async () => {
    const adminId = window.localStorage.getItem("adminId");
    if (!adminId) {
      navigate("/login-account");
    } else {
      try {
        const response = await axios.post(
          "https://ecommerce-api-7sxd.onrender.com/admin/product-case/create",
          {
            productCaseName,
            adminId : 1 
          }
        );
        console.log(response.data);
        setAllProductTypes(
          response.data.productCasesData,
        );

      } catch (error : any ) {
        console.log(error.message);
      }
    }
  };

  const deleteProductCase = async () =>{
    try{
      const response = await axios.delete(`https://ecommerce-api-7sxd.onrender.com/admin/product-case/delete/${1}/:${1}`);
      console.log(response.data)
    }catch(err : any ){
        console.log(err.message)
    }
      
  };

  
  return (
    <div>
      <div>
        {allProductTypes.map((each: any) => {
          return (
            <div key={each.id}>
              <h1>{each.productCaseName}</h1>
            </div>
          );
        })}
      </div>

      <input
        type="text"
        placeholder="Enter Product Type Name"
        value={productCaseName}
        onChange={(e) => setProductCaseName(e.target.value)}
      />

      <button onClick={createProductCases}>Create Product Type</button>
      <button onClick={deleteProductCase}>Delete product case </button>
    </div>
  );
};

export default ProductType;
