import axios from 'axios';
import {urls} from './urls'

export const getAllProductTypes =  async () =>{
    const response = await axios.get(urls.allProductCases)
    console.log(response.data)
};

export const deleteProductCase = async () =>{
    const response = await axios.get(urls.deleteProductCase)
    console.log(response.data)
}

export const createProductCase = async () =>{
    const response = await axios.get(urls.createProductCase)
    console.log(response.data)
}

export const updateProductCase = async () =>{
    const response = await axios.get(urls.updateProductCase)
    console.log(response.data)
}

