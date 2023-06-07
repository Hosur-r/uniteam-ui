import { coursesUrl } from "../App/Urls"
import { useEffect, useState } from "react"
import { CreateMaterial, DeleteMaterial } from "./req"
import { IMaterial } from "./models"
import {PlusCircleIcon } from "@heroicons/react/24/solid"

function Material (props:any) {

  const [content, setContent] = useState("")
  const [materials, setMaterials] = useState<IMaterial[]>([])
  const [materialId, setMaterialId] = useState<number>(0)
  const [value, setValue] = useState("")
  const [img, setImg] = useState<string | ArrayBuffer | null>()

    useEffect(() => {
      props.materials ? setMaterials(props.materials) : setMaterials([])
    }, [props.materials])

    return (
      <div className="w-full p-4">

        {materials?.map((item:any, idx:number) => {
           {console.log(item)}
          return(
            <div key={idx} className=" mb-1 pl-3 w-full" >

                {item.type == "string" ? <p className="mt-2 max-w-[828.89px]">{item.content}</p> : <img src={`http://courses.uni-team-inc.online/${item.content}`} alt="material image" />}
               
                  <p className="text-center text-sm mb-8 text-red-500 opacity-60 hover:opacity-100 transition-all cursor-pointer" 
                          onClick={() => {
                            DeleteMaterial(coursesUrl, props.id, props.sectionId, item.id )
                            setMaterials(materials.filter(obj => obj.id !== item.id))
                          }}>Удалить материал</p>

            </div>
          )
        })}

        <div className="flex items-center mb-2 w-full">
                  <textarea placeholder="Добавить материал" wrap="soft" 
                      onChange={(e) => {
                          setContent(e.target.value)
                        }} 
                      maxLength={300} rows={1} cols={100} value={content}
                      className="block mb-1 xs:h-48 sl:h-32 xs:w-full resize-none py-1.5 pl-2 my-2 xs:text-sm xs:leading-6 formInput bg-slate-50"> 
                  </textarea>
              
              <PlusCircleIcon 
              className="w-7 h-7 text-indigo-500 opacity-60 hover:opacity-100 transition-all cursor-pointer" 
              onClick={async() => {
                  let materialId = await CreateMaterial(coursesUrl, content, props.id, props.sectionId, "string").then(data => data.data)
                  setMaterials([...materials, {
                    content:content,
                    id:materialId.id,
                    type:"string",
                  }])
                  setContent("")
              }}/>
              

        </div>
              <div className="flex items-center  mb-2 w-full ">
                  <div className="p-8 w-full shadow-lg shadow-indigo-50 border border-indigo-50 rounded-md">
                    <input type="file" className="text-sm" onChange={e => {
                           if (!e.target.files) return;

                           var reader = new FileReader();
                           reader.readAsDataURL(e.target.files[0]);
                       
                           reader.onload = () => {
                             setImg(reader.result)
                           };

                    
                    }} />
                  </div>
                
             
                <PlusCircleIcon 
              className="w-7 h-7 text-indigo-500 opacity-60 hover:opacity-100 transition-all cursor-pointer" 
              onClick={async() => {
                  let materialId = await CreateMaterial(coursesUrl, img, props.id, props.sectionId, "photo").then(data => data.data)
                  setMaterials([...materials, {
                    content:img,
                    id:materialId.id,
                    type:"photo",
                  }])
                  setContent("")
                  window.location.reload()
              }}/>
              </div>

        </div>
    )
  }


export default Material