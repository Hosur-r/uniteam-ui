import Answers from "./Answers"
import { CreateField, DeleteField, UpdateField } from "./req"
import { formsUrl } from "../App/Urls"
import { useEffect, useState } from "react"
import { IField } from "./models"
import { TrashIcon, PlusCircleIcon } from "@heroicons/react/24/solid"

function Fields (props:any) {

  const [title, setTitle] = useState("")
  const [field, setField] = useState("")
  const [fieldId, setFieldId] = useState<number>(0)
  const [fields, setFields] = useState<IField[]>([])

    useEffect(() => {
      props.fields ? setFields(props.fields) : setFields([])
    }, [props.fields])

    useEffect(() => {
      if(fieldId !== 0 ){
        const timeoutID2 = setTimeout(() => UpdateField(formsUrl, props.id, fieldId, field), 3000);
        return () => {clearTimeout(timeoutID2)}
      }
    }, [field]);

    return (
      <div className="block md:w-[45vw] xs:w-full">
        <div className="flex items-center mb-14 w-full">
          <input placeholder="Создать вопрос" onChange={event => {setTitle(event.target.value)}} value={title} name="title" type="text" maxLength={50} autoComplete="on" className="w-full rounded-md border-0 py-1.5 my-2 pl-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 xs:text-sm xs:leading-6"/>
            <PlusCircleIcon className="w-7 h-7 text-indigo-500 opacity-60 hover:opacity-100 transition-all cursor-pointer" onClick={async() => {
               await CreateField(formsUrl, title, props.id)
                setFields([...fields, {
                title:title,
                }])
                setTitle("")
            }}/>
        </div>
      

        {fields?.map((item:any, idx:number) => {
          return(
            <div key={idx} className="w-full p-6 shadow-lg rounded-md block relative mb-5">
              <input placeholder="Вопрос" 
                  onChange={(e) => {
                    setField(e.target.value)
                    setFieldId(item.id)
                  }} 
                defaultValue={item.title} name="title" type="text" maxLength={50} autoComplete="on" 
                className="block w-full py-1.5 my-2 pl-2 xs:text-sm xs:leading-6 formInput"/>
              
                <TrashIcon className="w-[1.10rem] h-[1.10rem] top-1 right-4 text-red-500 opacity-60 hover:opacity-100 transition-all cursor-pointer absolute" onClick={() => {
                  DeleteField(formsUrl, props.id, item.id)
                  setFields(fields.filter(obj => obj.id !== item.id))
                  }}/>


              <Answers answer = {item?.answers} id = {props.id} fieldId = {item?.id}/>
            </div>
            
          )
        })}

      </div>
    )
  }


export default Fields