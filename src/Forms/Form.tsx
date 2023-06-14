import { useEffect, useState } from "react"
import { FormReq, DeleteForm, UpdateForm } from "./req"
import { formsUrl, domenUrl } from "../App/Urls"
import { IForm } from "./models"
import Fields from "./Fields"
import Header from "../Header/Header"
import { DocumentMinusIcon, ChartBarIcon } from "@heroicons/react/24/solid"
import { TransitionHandler } from "../handlers"
import { useNavigate } from "react-router-dom"

function Form() {

    let path:string = window.location.pathname.slice(6)   
    const navigate = useNavigate()
    const[form, setForm] = useState<IForm>()
    const[title, setTitle] = useState<string>("")
    const[desc, setDesc] = useState<string>("")

    useEffect(() => {
      awaitForm()
    }, [])

    useEffect(() => {
      if(form){
        setTitle(form.title)
        setDesc(form.description)
      }
    }, [form])

    useEffect(() => {
      if(title !== "" && desc !== ""){
        const timeoutID:NodeJS.Timeout = setTimeout(() => UpdateForm(path, formsUrl, 0, title, desc), 3000);
        return () => clearTimeout(timeoutID);
      }
    }, [title, desc]);
    

    const awaitForm = async() => {
      await FormReq(formsUrl, path, setForm)
    } 

    return (
      <div className="mb-10 ">
        <Header/>

        <div className="flex items-strech fixed bottom-4 right-4 cursor-pointer opacity-75 hover:opacity-100 transition-all z-10 " onClick={async() => {
              await DeleteForm(path, formsUrl)
              TransitionHandler("/forms", navigate)
            }}>
                <p className="text-sm px-2 text-gray-900">Удалить форму</p>
                <DocumentMinusIcon className="h-6 w-6 text-red-600"/>
        </div>

        <div className="flex items-center fixed bottom-4 left-4 cursor-pointer opacity-75 hover:opacity-100 transition-all z-10 " onClick={() => {
              TransitionHandler(`/analytics/${path}`, navigate)
            }}>
                <ChartBarIcon className="h-6 w-6 text-indigo-600"/>
                <p className="text-sm px-2 text-gray-900">Статистика формы</p>
        </div>

        <div className="xs:mx-3 sl:mx-6 flex items-center flex-col">

          <div className="mb-6 xl:w-2/4  flex items-center flex-col p-4 shadow-lg shadow-indigo-50 border border-indigo-50 rounded-md">

                  <input placeholder="Название формы" 
                    onChange={(event) => {setTitle(event.target.value)}} 
                  defaultValue={form?.title} name="title" type="text" maxLength={50} autoComplete="on" 
                  className="block w-full lg:w-2/3 py-1.5 my-2 pl-2 xs:text-sm xs:leading-6 formInput"/>

                  <textarea placeholder="Описание формы" wrap="soft" 
                    onChange={(event) => {setDesc(event.target.value)}} 
                    maxLength={150} rows={1} cols={100} defaultValue={form?.description} 
                    className="block mb-1 w-full xs:h-32 h-28 lg:w-2/3 resize-none py-1.5 my-2 pl-2 xs:text-sm xs:leading-6 formInput"> 
                  </textarea>
          </div>

          <div className="">
            <Fields questions = {form?.questions} FormId = {path} />
          </div>

        </div>

      </div>
    )
}

export default Form