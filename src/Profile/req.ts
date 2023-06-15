import axios from "axios"
import { IProfile } from "./models"

export async function GetProfile(url:string, setProfile:React.Dispatch<React.SetStateAction<IProfile | undefined>>){
    return await axios.get(url + localStorage.getItem('access')).then(data => {setProfile(data.data)})
}


export async function UpdateImage(url:string, id:string | null, path:string | ArrayBuffer | null | undefined , field:string){
    return await axios.put(url + "/" + field,  {
        "id":id,
        "new":path
    })
}


export async function firstName(url:string, id:string | null, firstName:string){
    return await axios.put(url + "/" + 'first',  {
        "id":id,
        "first_name":firstName
    })
}


export async function lastName(url:string, id:string | null, lastName:string){
    return await axios.put(url + "/" + 'last',  {
        "id":id,
        "last_name":lastName
    })
}