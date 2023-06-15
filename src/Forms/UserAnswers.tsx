import { useEffect, useState } from "react"
import { IAnswer, IUserAnswer } from "./models"
import { PushHistory } from "./req";
import { historyUrl } from "../App/Urls";

function UserAnswers (props:any) {

  let path:string = window.location.pathname.slice(10)
  const [answer, setAnswer] = useState<IAnswer[]>([])
  const [value, setValue] = useState<string>('');
  // const [userAnswers, setUserAnswers] = useState({
  //   selected:''
  // })
  // let userAnswer:any = []

  useEffect(() => {
    props.answer ? setAnswer(props.answer) : setAnswer([])
  }, [props.answer])


  // useEffect(() => {
  //   console.log(userAnswers)
    // localStorage.setItem('answers', userAnswers)
  // }, [userAnswers])

    return (
      <div className="w-full p-4 relative">
        {answer?.map((item:any, idx:number) => {
          return(
            <div key={idx} className="flex items-center mb-1 pl-3 w-full" >
                <div className="flex items-center">
                    <input type="radio" name="answer" value={item.content} onChange={() => setValue(item.id)}/>
                    {/* <input type="radio" name="answer" value={item.content} onChange={() => setUserAnswers(userAnswers.push())}/> */}
                    <p className="mb-1 ml-1">{item.content}</p>
                </div>
            </div>
          )
        })}

      

              {value ? <p 
              onClick={() => {
                PushHistory(historyUrl, path,  value)
              }} 
              className="absolute bottom-0 right-5 cursor-pointer transition-all rounded-md
               bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6
                text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 
                focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >Ответить</p> : <></>}

              {/* <p onClick={() => {
                PushHistory(historyUrl, path,  userAnswers)
              }}>Отправить форму</p> */}

        </div>
    )
  }


export default UserAnswers