export const setDeviceToken = (token) =>{
    return localStorage.setItem('deviceToken', token);
}


export const isDeviceTokenRegistered = (key) => {
    try{
        localStorage.getItem(key);
        return true;
    }catch(error){
        return false;
    }

}

export const getDeviceToken = (key) =>{
    return JSON.parse(localStorage.getItem(key));
}

export const removeDeviceToken = () =>{
    localStorage.removeItem('deviceToken');
}