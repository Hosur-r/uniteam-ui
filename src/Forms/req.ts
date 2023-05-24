import axios from "axios";
import { IFormsList } from "./models";

export async function ListForms(url:string, setData:React.Dispatch<React.SetStateAction<IFormsList[]>>){
    await axios.get(url)
    .then((data) => {
       setData(data.data)
    })
}

export async function CreateForm(title:string, desc:string){
    await axios.post("http://forms.uni-team-inc.online/forms", 
    {"title": title, "desc": desc})
}



// export async function test(){
//     await axios.post("http://80.78.240.205:8000/forms",
//     {"title": "123", "desc": "123"}
//     )
// }

