import { formsUrl } from "../App/Urls"
import { useEffect, useState } from "react"
import { CreateAnswer, DeleteAnswer, UpdateAnswer } from "./req"
import { IAnswer } from "./models"
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/solid"

function Answers (props:any) {

  const [content, setContent] = useState("")
  const [answer, setAnswer] = useState<IAnswer[]>([])
  const [answerId, setAnswerId] = useState<number>(0)
  const [answerValue, setAnswerValue] = useState("")

    useEffect(() => {
      props.answer ? setAnswer(props.answer) : setAnswer([])
    }, [props.answer])

    useEffect(() => {
      if(answerId !== 0 ){
        const timeoutID2 = setTimeout(() => UpdateAnswer(formsUrl, answerValue, props.id, props.fieldId, answerId), 3000);
        return () => {clearTimeout(timeoutID2)}
      }
    }, [answerValue]);

    return (
      <div className="w-full p-4">

        {answer?.map((item:any, idx:number) => {
          return(
            <div key={idx} className="flex items-center mb-1 pl-3 w-full" >
                <input placeholder="Ответ" 
                onChange={(e) => {
                  setAnswerId(item.id)
                  setAnswerValue(e.target.value)
                  }} 
                  defaultValue={item.content} name="title" type="text" maxLength={50} autoComplete="on" 
                  className="block w-full py-1.5 my-2 pl-2 xs:text-sm xs:leading-6 formInput"/>
              
              <MinusCircleIcon 
                className="w-4 h-4 text-red-500 opacity-60 hover:opacity-100 transition-all cursor-pointer ml-2" 
                  onClick={() => {
                        DeleteAnswer(formsUrl, props.id, props.fieldId, item.id )
                        setAnswer(answer.filter(obj => obj.id !== item.id))
                  }}
                />

            </div>
          )
        })}

        <div className="flex items-center mb-2 w-full">
            <input placeholder="Добавить ответ" onChange={event => {setContent(event.target.value)}} value={content} name="title" type="text" autoComplete="on" maxLength={18} className="block w-full rounded-md border-0 py-1.5 my-2 pl-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 xs:text-sm xs:leading-6"/>
              
              <PlusCircleIcon 
              className="w-7 h-7 text-indigo-500 opacity-60 hover:opacity-100 transition-all cursor-pointer" 
              onClick={async() => {
                  let answersId = await CreateAnswer(formsUrl, content, props.id, props.fieldId).then(data => data.data)
                  setAnswer([...answer, {
                    content:content,
                    id:answersId.id
                  }])
                  setContent("")
              }}/>
              
        </div>
        <div className="xs:border sl:border-none w-full  border-indigo-100"></div>
        </div>
    )
  }


export default Answers