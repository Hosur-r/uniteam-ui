import { formsUrl } from "../App/Urls"
import { useEffect, useState } from "react"
import { CreateAnswer } from "./req"
import { IAnswer } from "./models"

function Answers (props:any) {

  const [content, setContent] = useState("")
  const [answer, setAnswer] = useState<IAnswer[]>([])

    useEffect(() => {
      setAnswer(props.answer)
    }, [])

    return (
      <div>
        <div className="flex">
            <input placeholder="Ответ" onChange={event => {setContent(event.target.value)}} value={content} name="title" type="text" autoComplete="on" maxLength={18} className="block w-2/3 rounded-md border-0 py-1.5 my-2 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            <button onClick={() => {
              CreateAnswer(formsUrl, content, props.id, props.fieldId)
              setAnswer([...answer, {
                content:content
              }])
              }}>Создать ответ</button>
        </div>
       
        {answer?.map((item:any, idx:number) => {
          return(
            <div key={idx}>
              <p>Ответ: {item.content}</p>
            </div>
          )
        })}
        </div>
    )
  }


export default Answers