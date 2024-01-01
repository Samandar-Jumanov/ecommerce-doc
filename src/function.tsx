import axios from 'axios';
import {urls} from './urls'


export const getAllProductTypes =  async ()  =>{
     try{
        const response = await axios.get(urls.allProductCases)
        return response.data;
     }catch(err : any ){
          return { err : err.message}
     }
};


export const deleteProductCase = async () =>{
  try {
    const response = await axios.get(urls.deleteProductCase)
    return response.data.message 
  } catch (error : any ) {
        return {error : error.message}
  }
}

export const createProductCase = async () =>{
       try{
        const response = await axios.get(urls.deleteProductCase)
        return response.data.message 
       }catch(err : any ){
           return { err : err.message}
       }
}

export const updateProductCase = async () =>{
     try {
       const response = await axios.get(urls.updateProductCase)
        return response.data.message 
     } catch (error : any ) {
            return { err : error.message }
     }   
}




