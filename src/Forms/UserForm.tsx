import { useEffect, useState } from "react"
import { FormReq, DeleteForm, UpdateForm } from "./req"
import { domenUrl, formsUrl } from "../App/Urls"
import { IForm } from "./models"
import Header from "../Header/Header"
import UserFields from "./UserFields"

function UserForm() {

    let path:string = window.location.pathname.slice(10)
    const[form, setForm] = useState<IForm>()

    useEffect(() => {
      awaitForm()
    }, [])

    const awaitForm = async() => {
      await FormReq(formsUrl, path, setForm)
    } 

    return (
      <div className="mb-10 ">
        <Header/>

        <div className="xs:mx-3 sl:mx-6 flex items-center flex-col ">

          <div className="mb-6 xs:w-full sm:w-[45vh] sl:w-[55vh] md:w-[60vw] lg:w-[45vw] flex items-center flex-col p-4 shadow-lg shadow-indigo-50 border border-indigo-50 rounded-md">
                <p className="font-medium mb-4">{form?.title}</p>
                <p>{form?.description}</p>
          </div>

          <div className="">
            <UserFields  questions = {form?.questions} FormId = {path}/>
          </div>

        </div>

      </div>
    )

}

export default UserForm