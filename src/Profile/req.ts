import axios from "axios"
import { IProfile } from "./models"

export async function GetProfile(url:string, setProfile:React.Dispatch<React.SetStateAction<IProfile | undefined>>){
    return await axios.get(url + localStorage.getItem('access')).then(data => {setProfile(data.data)})
}
