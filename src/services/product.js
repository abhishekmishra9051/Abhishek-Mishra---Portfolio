import request from './axiosConfig'
const {defaultRequest} = request
export const getProductList = () => defaultRequest.get("/products")