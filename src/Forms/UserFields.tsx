import { useEffect, useState } from "react"
import { IQuestion} from "./models"
import UserAnswers from "./UserAnswers"


function UserFields (props:any) {

  const [fields, setFields] = useState<IQuestion[]>([])

    useEffect(() => {
      props.questions ? setFields(props.questions) : setFields([])
    }, [props.questions])


    return (
      <div className="block xs:w-full sm:w-[45vh] sl:w-[55vh] md:w-[60vw] lg:w-[45vw] ">      

        {fields?.map((item:any, idx:number) => {
          return(
            <div key={idx} className="w-full min-w-[296px] p-6 block relative mb-5 shadow-lg shadow-indigo-50 border border-indigo-50 rounded-md">
              <div className="">
                <p className="text-center font-medium">{item.title}</p>          
              </div>
              
              <UserAnswers answer = {item?.answers} questionId = {item.id}/>
            </div>
            
          )
        })}

      </div>
    )
  }


export default UserFields