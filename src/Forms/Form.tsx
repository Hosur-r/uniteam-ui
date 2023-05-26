import { useEffect, useState } from "react"
import { FormReq } from "./req"
import { formsUrl } from "../App/Urls"
import { IForm } from "./models"
import Fields from "./Fields"
import Header from "../Header/Header"


function Form() {

    let path:string = window.location.pathname
    let id:number = parseInt(path.replace(/[^\d]/g, ''))
    const[form, setForm] = useState<IForm>()

    useEffect(() => {
        FormReq(formsUrl, id, setForm)
    }, [])
    

    return (
      <div>
        <Header/>

        <div className="ml-6">

          <div className="mb-4">
            <h1 className="xs:text-lg lg:text-2xl mb-2 font-medium">{form?.title}</h1>
              <p className="xs:text-sm lg:text-base font-light text-gray-600 mb-1">{form?.desc}</p>
            <div className="border w-2/3  border-indigo-300"></div>
        </div>
          <Fields fields = {form?.fields} id = {id}/>
        </div>

      </div>
    )

}

export default Form