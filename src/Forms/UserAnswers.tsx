
import { useEffect, useState } from "react"
import { IAnswer } from "./models"


function UserAnswers (props:any) {

  const [answer, setAnswer] = useState<IAnswer[]>([])

    useEffect(() => {
      props.answer ? setAnswer(props.answer) : setAnswer([])
    }, [props.answer])


    return (
      <div className="w-full p-4">

        {answer?.map((item:any, idx:number) => {
          return(
            <div key={idx} className="flex items-center mb-1 pl-3 w-full" >
                <div className="flex items-center">
                    <input type="radio" />
                    <p className="mb-1 ml-1">{item.content}</p>
                </div>
           
            </div>
          )
        })}
        </div>
    )
  }


export default UserAnswers