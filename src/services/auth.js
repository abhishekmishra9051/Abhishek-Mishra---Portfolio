import request from './axiosConfig'

const { defaultRequest } = request

export const userRegister = (requestBody) => defaultRequest.post("/users", requestBody)

export const userLogin = (requestBody) => defaultRequest.get("/users?email=" + requestBody.email)