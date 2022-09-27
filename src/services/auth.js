import request from './axiosConfig'
const {defaultRequest} = request
export const userLogin = () => defaultRequest.get("/users")
export const userRegister = (requestBody) => defaultRequest.post("/users", requestBody)