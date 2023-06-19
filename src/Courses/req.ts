import axios from "axios";
import { ICoursesList, ICourse } from "./models";
import { GetAccessToken } from "../handlers";

// Main reqs

export async function ListCourses(url:string, setData:React.Dispatch<React.SetStateAction<ICoursesList[]>>){
    await axios.get(url, { headers: { Authorization: `Bearer ${GetAccessToken()}` }})
    .then((data) => {
       setData(data.data)
    })
}

export async function CreateCourse(url:string, title:string, desc:string){
    return await axios.post(url, {"title": title, "desc": desc}, { headers: { Authorization: `Bearer ${GetAccessToken()}` }})
}


// course req

export async function getCourse(url:string, id:number, setData:React.Dispatch<React.SetStateAction<ICourse | undefined>>){
    await axios.get(url + "/" + id, { headers: { Authorization: `Bearer ${GetAccessToken()}` }})
    .then((data) => {
       setData(data.data)
    })
}

export async function DeleteCourse(id:number, url:string){
    await axios.delete(url + "/" + id, { headers: { Authorization: `Bearer ${GetAccessToken()}` }})
}

export async function UpdateCourse(id:number, url:string, title:string, desc:string){
    await axios.put(url + "/" + id, {"title":title, "description":desc}, { headers: { Authorization: `Bearer ${GetAccessToken()}` }})

}


// section req


export async function CreateSection(url:string, title:string, id:number){
    return await axios.post(url + "/" + id + "/sections", {"title": title}, { headers: { Authorization: `Bearer ${GetAccessToken()}` }})
}

export async function DeleteSection(url:string, id:number, sectionId:number){
    await axios.delete(url + "/" + id + "/sections/" + sectionId, { headers: { Authorization: `Bearer ${GetAccessToken()}` }})
}

export async function UpdateSection(url:string, id:number, sectionId:number, title:string){
    await axios.put(url + "/" + id + "/sections/" + sectionId, {
        "title":title,
    }, { headers: { Authorization: `Bearer ${GetAccessToken()}` }})
}


// material req


export async function CreateMaterial(url:string, content:string | ArrayBuffer | null | undefined, id:number, sectionId:number, type:string){
    return await axios.post(url + "/" + id + "/sections/" + sectionId + "/materials", {"content": content, "type":type}, { headers: { Authorization: `Bearer ${GetAccessToken()}` }})
}

export async function DeleteMaterial(url:string, id:number, sectionId:number, materialId:number){
    await axios.delete(url + "/" + id + "/sections/" + sectionId + "/materials/" + materialId, { headers: { Authorization: `Bearer ${GetAccessToken()}` }})
}

export async function GetMaterial(url:string, id:number, sectionId:number, materialId:number){
    await axios.get(url + "/" + id + "/sections/" + sectionId + "/materials/" + materialId, { headers: { Authorization: `Bearer ${GetAccessToken()}` }})
}