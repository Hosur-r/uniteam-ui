import axios from "axios"
import { IProfile } from "./models"
import { GetAccessToken } from "../handlers"
import { IFormsList } from "../Forms/models"

export async function GetProfile(url:string, setProfile:React.Dispatch<React.SetStateAction<IProfile | undefined>>){
        return await axios.get(url, { headers: { Authorization: `Bearer ${GetAccessToken()}` }} )
        .then(data => {setProfile(data.data)})  
}

export async function UpdateImage(url:string, path:string | ArrayBuffer | null | undefined , field:string){
        return await axios.put(url + "/" + field,  {
            "new":path
        }, { headers: { Authorization: `Bearer ${GetAccessToken()}` }})
}

export async function firstName(url:string, firstName:string){
        return await axios.put(url + "/" + 'first',  {
            "first_name":firstName
        }, { headers: { Authorization: `Bearer ${GetAccessToken()}` }})
}

export async function lastName(url:string, lastName:string){
        return await axios.put(url + "/" + 'last',  {
            "last_name":lastName
        }, { headers: { Authorization: `Bearer ${GetAccessToken()}` }})
}


export async function ListFormsByAuthor(url:string, setData:React.Dispatch<React.SetStateAction<IFormsList[]>>){
        await axios.get(url + "s" + "/me", { headers: { Authorization: `Bearer ${GetAccessToken()}` }})
        .then((data) => {
           setData(data.data)
        })
}







