import { useEffect, useState } from "react"
import { ISection } from "./models"
import UserMaterial from "./UserMaterial"

function UserSection (props:any) {

  const [sections, setSections] = useState<ISection[]>([])

    useEffect(() => {
      props.sections ? setSections(props.sections) : setSections([])
    }, [props.sections])

    return (
      <div className="block max-w-[450px]">
      
        {sections?.map((item:any, idx:number) => {
               
          return(
            <div key={idx} className="w-full  block relative mb-5 ">
              <div className="mb-4">
                    <p className="font-medium pb-1">{item.title}</p>
                    <div className="border w-full  border-indigo-300"></div>
              </div>
              
              <UserMaterial materials = {item?.body} id = {props.id} sectionId = {item?.id}/>
            </div>
            
          )
        })}

      </div>
    )
  }


export default UserSection