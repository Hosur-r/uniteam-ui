import Answers from "./Answers"
import { CreateField } from "./req"
import { formsUrl } from "../App/Urls"
import { useEffect, useState } from "react"
import { IField } from "./models"

function Fields (props:any) {

  const [title, setTitle] = useState("")
  const [fields, setFields] = useState<IField[]>([])

    useEffect(() => {
      setFields(props.fields)
    }, [])

    return (
      <div>
        <div className="flex">
          <input placeholder="Вопрос" onChange={event => {setTitle(event.target.value)}} value={title} name="title" type="text" autoComplete="on" maxLength={18} className="block w-2/3 rounded-md border-0 py-1.5 my-2 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          <button onClick={() => {
            CreateField(formsUrl, title, props.id)
              setFields([...fields, {
                title:title
              }])
            }}>Создать вопрос</button>
        </div>
      

        {fields?.map((item:any, idx:number) => {
          return(
            <div key={idx}>
              <p>Вопрос: {item.title}</p>
              {/* <div className="border w-1/3  border-indigo-300"></div> */}
              <Answers answer = {item?.answers} id = {props.id} fieldId = {item?.id}/>
              {/* <div className="border w-1/3  border-indigo-300"></div> */}
            </div>
          )
        })}

      </div>
    )
  }


export default Fields