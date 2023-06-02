import { useEffect, useState } from "react"
import { FormReq, DeleteForm, UpdateForm } from "./req"
import { formsUrl } from "../App/Urls"
import { IForm } from "./models"
import Fields from "./Fields"
import Header from "../Header/Header"
import { DocumentMinusIcon } from "@heroicons/react/24/solid"
import { TransitionHandler } from "../handlers"
import { useNavigate } from "react-router-dom"

function Form() {

    let path:string = window.location.pathname
    let id:number = parseInt(path.replace(/[^\d]/g, ''))
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
        setDesc(form.desc)
      }
    }, [form])

    useEffect(() => {
      const timeoutID:NodeJS.Timeout = setTimeout(() => UpdateForm(id, formsUrl, title, desc), 3000);
      return () => clearTimeout(timeoutID);
    }, [title, desc]);

    const awaitForm = async() => {
      await FormReq(formsUrl, id, setForm)
    } 

    return (
      <div className="mb-10 ">
        <Header/>

        <div className="flex items-strech fixed bottom-4 right-4 cursor-pointer opacity-75 hover:opacity-100 transition-all z-10 " onClick={async() => {
              await DeleteForm(id, formsUrl)
              TransitionHandler("/Forms", navigate)
            }}>
                <p className="text-sm px-2 text-gray-900">Удалить форму</p>
                <DocumentMinusIcon className="h-6 w-6 text-red-600"/>
        </div>

        <div className="xs:mx-3 sl:mx-6 flex items-center flex-col">

          <div className="mb-6 xl:w-2/4  flex items-center flex-col p-4 shadow-lg shadow-indigo-50 border border-indigo-50 rounded-md">

                  <input placeholder="Название формы" 
                    onChange={(event) => {setTitle(event.target.value)}} 
                  value={title} name="title" type="text" maxLength={50} autoComplete="on" 
                  className="block w-full lg:w-2/3 py-1.5 my-2 pl-2 xs:text-sm xs:leading-6 formInput"/>

                  <textarea placeholder="Описание формы" wrap="soft" 
                    onChange={(event) => {setDesc(event.target.value)}} 
                    maxLength={150} rows={1} cols={100} value={desc} 
                    className="block mb-1 w-full xs:h-32 h-28 lg:w-2/3 resize-none py-1.5 my-2 pl-2 xs:text-sm xs:leading-6 formInput"> 
                  </textarea>
          </div>

          <div className="">
            <Fields fields = {form?.fields} id = {id}/>
          </div>

        </div>

      </div>
    )

}

export default Form