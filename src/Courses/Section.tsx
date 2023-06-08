import { CreateSection, DeleteSection, UpdateSection } from "./req"
import { coursesUrl } from "../App/Urls"
import { useEffect, useState } from "react"
import { TrashIcon, PlusCircleIcon } from "@heroicons/react/24/solid"
import Material from "./Material"
import { ISection } from "./models"

function Section (props:any) {

  const [title, setTitle] = useState("")
  const [section, setSection] = useState("")
  const [sectionId, setSectionId] = useState<number>(0)
  const [sections, setSections] = useState<ISection[]>([])

    useEffect(() => {
      props.sections ? setSections(props.sections) : setSections([])
    }, [props.sections])

    useEffect(() => {
      if(sectionId !== 0 ){
        const timeoutID2:NodeJS.Timeout = setTimeout(() => UpdateSection(coursesUrl, props.id, sectionId, section), 3000);
        return () => {clearTimeout(timeoutID2)}
      }
    }, [section]);

    return (
      <div className="block max-w-[450px]">
        <div className="mb-6 w-full relative">
          <input placeholder="Создать секцию" onChange={event => {setTitle(event.target.value)}} value={title} name="title" type="text" maxLength={50} autoComplete="on" className="w-full rounded-md border-0 py-1.5 my-2 pl-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 xs:text-sm xs:leading-6"/>
            <PlusCircleIcon className="w-7 h-7 text-indigo-500 opacity-60 hover:opacity-100 transition-all cursor-pointer absolute right-0 bottom-3" 
            onClick={async() => {
                let sectionId = await CreateSection(coursesUrl, title, props.id).then(data => data.data)
                setSections([...sections, {
                title:title,
                id:sectionId?.id
                }])
                setTitle("")
            }}
            />
        </div>
      

        {sections?.map((item:any, idx:number) => {
               
          return(
            <div key={idx} className="w-full  block relative mb-5 ">
              <div className="">
              <input placeholder="Название секции" 
                  onChange={(e) => {
                    setSection(e.target.value)
                    setSectionId(item.id)
                  }} 
                defaultValue={item.title} name="title" type="text" maxLength={50} autoComplete="on" 
                className="block w-full py-1.5 my-2 pl-2 xs:text-base font-medium xs:leading-6 formInput text-center"/>
              
                <TrashIcon className="w-[1.10rem] h-[1.10rem] top-1 right-4 text-red-500 opacity-60 hover:opacity-100 transition-all cursor-pointer absolute" 
                onClick={() => {
                  DeleteSection(coursesUrl, props.id, item.id)
                  setSections(sections.filter(obj => obj.id !== item.id))
                  }}
                  />
              </div>
              
              <Material materials = {item?.body} id = {props.id} sectionId = {item?.id}/>
            </div>
            
          )
        })}

      </div>
    )
  }


export default Section