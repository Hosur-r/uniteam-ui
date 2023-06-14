import axios from "axios"

export async function UpdateToken(url:string, refresh:string){
    return await axios.put(url, {
        "token":refresh
    })
}

export async function SignUp(url:string, username:string, password:string, email:string, control:string){
   return await axios.post(url, {
        "username":username,
        "email":email,
        "password":password,
        "control":control
    })
}

export async function SignIn(url:string, username:string, password:string){
    return await axios.put(url, {
        "username":username,
        "password":password,

    })
}

export async function RememberPsw(url:string, username:string, control:string, newPsw:string){
    return await axios.put(url, {
        "username":username,
        "control":control,
        "new":newPsw,
    })
}



