import { useEffect, useState } from "react"
import { FormReq, PushHistory } from "./req"
import { formsUrl } from "../App/Urls"
import { IForm } from "./models"
import Header from "../Header/Header"
import UserFields from "./UserFields"
import { useAppSelector } from "../store/hooks"
import { RootState } from "../store/store"
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
import { historyUrl } from "../App/Urls"

function UserForm() {

    let path:string = window.location.pathname.slice(10)
    const[form, setForm] = useState<IForm>()
    const answerValue = useAppSelector((state: RootState) => state.answerValues.info.value)

    useEffect(() => {
      awaitForm()
    }, [])

    useEffect(() => {
      console.log(answerValue);
      
    }, [answerValue])

    const awaitForm = async() => {
      await FormReq(formsUrl, path, setForm)
    } 

    return (
      <div className="mb-10 ">
        <Header/>

        <div className="xs:mx-3 sl:mx-6 flex items-center flex-col">

          <div className="mb-6 xs:w-full sm:w-[45vh] sl:w-[55vh] md:w-[60vw] lg:w-[45vw] flex items-center flex-col p-4 shadow-lg shadow-indigo-50 border border-indigo-50 rounded-md">
                <p className="font-medium mb-4">{form?.title}</p>
                <p>{form?.description}</p>
          </div>
            <div className="">
                <UserFields  questions = {form?.questions} FormId = {path}/>
            </div>

            <div className="flex xs:w-[296px] sm:w-[45vh] sl:w-[55vh] md:w-[60vw] lg:w-[45vw] items-center shadow-lg shadow-indigo-50 border border-indigo-50 rounded-md p-3 cursor-pointer hover:shadow-indigo-200 transition-all mb-4">
                    <PaperAirplaneIcon className="h-7 w-7 text-indigo-500"/>
                    <p className="ml-2" onClick={() => {
                        PushHistory(historyUrl, path, answerValue)
                    }}>Отправить ответы</p> 
            </div>

        </div>

      </div>
    )
}



export default UserForm
