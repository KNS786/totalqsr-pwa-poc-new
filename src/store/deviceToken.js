export const setDeviceToken = (token) =>{
    return localStorage.setItem('deviceToken', token);
}

export const getDeviceToken = () =>{
    return localStorage.getItem("deviceToken");
}

export const removeDeviceToken = () =>{
    localStorage.removeItem('deviceToken');
}