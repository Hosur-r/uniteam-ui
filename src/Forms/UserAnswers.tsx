import { useEffect, useState } from "react"
import { IAnswer } from "./models"
import { useAppDispatch } from "../store/hooks"
import { setValueInfo } from "../store/slice"


function UserAnswers(props:any) {

  const [answer, setAnswer] = useState<IAnswer[]>([])
  const [disabled, setDisabled] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    props.answer ? setAnswer(props.answer) : setAnswer([])
  }, [props.answer])

    return (
      <div className="w-full p-4 relative">
        {answer?.map((item:any, idx:number) => {
          return(
            <div key={idx} className="flex items-center mb-1 pl-3 w-full" >
                <div className="flex items-center">
                    <input type="radio" className="cursor-pointer" disabled={disabled} name={`${props.inputName}`} value={item.content} 
                    onChange={() => {
                      dispatch(setValueInfo(item.id))
                      setDisabled(true)
                    }}/>
                  
                    <p className="mb-1 ml-1">{item.content}</p>
                </div>
            </div>
          )
        })}

        </div>
    )
  }

export default UserAnswers