import axios from "axios";
import { IFormsList, IForm } from "./models";



export async function ListForms(url:string, setData:React.Dispatch<React.SetStateAction<IFormsList[]>>){
    await axios.get(url)
    .then((data) => {
       setData(data.data)
    })
}

export async function FormReq(url:string, id:number, setData:React.Dispatch<React.SetStateAction<IForm | undefined>>){
    await axios.get(url + "/" + id)
    .then((data) => {
       setData(data.data)
    })
}

export async function CreateForm(url:string, title:string, desc:string){
    return await axios.post(url, {"title": title, "desc": desc})
}

export async function DeleteForm(id:number, url:string){
    await axios.delete(url + "/" + id)
}

export async function UpdateForm(id:number, url:string, title:string, desc:string){
    await axios.put(url + "/" + id, {"title":title, "desc":desc})

}



export async function CreateField(url:string, title:string, id:number){
    return await axios.post(url + "/" + id + "/fields", {"title": title})
}

export async function DeleteField(url:string, id:number, fieldId:number){
    await axios.delete(url + "/" + id + "/fields/" + fieldId)
}

export async function UpdateField(url:string, id:number, fieldId:number, title:string){
    await axios.put(url + "/" + id + "/fields/" + fieldId, {"title":title})
}




export async function CreateAnswer(url:string, content:string, id:number, fieldId:number){
    return await axios.post(url + "/" + id + "/fields/" + fieldId + "/answers", {"content": content})
}

export async function DeleteAnswer(url:string, id:number, fieldId:number, answerId:number){
    await axios.delete(url + "/" + id + "/fields/" + fieldId +"/answers/" + answerId)
}

export async function UpdateAnswer(url:string, content:string, id:number, fieldId:number, answerId:number){
    await axios.put(url + "/" + id + "/fields/" + fieldId + "/answers/" + answerId, {"content": content})
}


// export async function test(){
//     await axios.post("http://80.78.240.205:8000/forms",
//     {"title": "123", "desc": "123"}
//     )
// }

