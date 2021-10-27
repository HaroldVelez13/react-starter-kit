export default function apiCall(method, url){
    return fetch(url,{
        method
    }).then(res=>res.json());
}