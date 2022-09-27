export const setSession = (name, value) =>{
    sessionStorage.setItem(name, JSON.stringify(value))
}

export const getSession = (name) => {
    let user = sessionStorage.getItem(name)
    if(user){
        return JSON.parse(user)
    }
    return false
}

export const isLoggedIn = () => {
    if(sessionStorage.getItem("token")){
        return true
    }
    return false
}

export const removedSession = (name) => {
    sessionStorage.removeItem(name)
}