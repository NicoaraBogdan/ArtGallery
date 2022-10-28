import axios from 'axios';
import { endpoints } from './constants';


//IMAGES
export const Images = {
  getAll: async () =>{
    return await axios.get(endpoints.imageGetAll)
  },
  
  add: async (imageDTO) => {
    return await axios.post(endpoints.imageAdd, imageDTO);
  },

  delete: async (imageId) => {
    return await axios.delete(endpoints.imageRemove, {
      headers: {
        id: imageId
      }
    })
  },

  update: async (imageUpdateDTO) => {
    return await axios.put(endpoints.imageUpdate, imageUpdateDTO);
  }
}

//TRANSACTION
export const Transactions = {
  setStatus: async (statusId, transactionId) => {
    return await axios.put(endpoints.transactionUpdate, {}, {
      headers:{
        statusId,
        transactionId,
      }
    })
  },

  getDeliverable: async () =>{
    return await axios.get(endpoints.transactionGet);
  },

  getAddress: async () => {
    return await axios.get(endpoints.transactionGetAddress);
  }
}


//COMUNICATION