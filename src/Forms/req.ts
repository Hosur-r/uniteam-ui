import axios from "axios";
import { IFormsList, IForm } from "./models";

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


export async function FormReq(url:string, id:number, setData:React.Dispatch<React.SetStateAction<IForm | undefined>>){
    await axios.get(url + "/" + id)
    .then((data) => {
       setData(data.data)
    })
}


export async function CreateField(url:string, title:string, id:number){
    await axios.post(url + "/" + id + "/fields", {"title": title})
}



export async function CreateAnswer(url:string, content:string, id:number, fieldId:number){
    await axios.post(url + "/" + id + "/fields/" + fieldId + "/answers", {"content": content})
}

// export async function test(){
//     await axios.post("http://80.78.240.205:8000/forms",
//     {"title": "123", "desc": "123"}
//     )
// }

