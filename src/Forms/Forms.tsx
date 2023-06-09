import Header from "../Header/Header"
import { formsUrl } from "../App/Urls"
import { ListForms } from "./req"
import { useEffect, useState } from "react"
import { IFormsList } from "./models"
import { DocumentPlusIcon } from '@heroicons/react/24/solid'
import { useNavigate } from "react-router-dom"
import { TransitionHandler } from "../handlers"

 function Forms(){

    const [listForms, setListForms] = useState<IFormsList[]>([])
    const navigate = useNavigate()

    const handler = async () => {
        await ListForms(formsUrl, setListForms)
    }

    useEffect(() => {
        handler()
    }, [])

    return (
    <div>
      
      <Header/> 

      <div className="ml-6">
        <div className="mb-4">
            <h1 className="xs:text-lg lg:text-2xl mb-2 font-medium">Формы</h1>
            <div className="border w-2/3  border-indigo-300"></div>
        </div>

        <div className="flex flex-wrap max-w-[90rem] relative xs:justify-center lg:justify-start">

            {listForms?.map((item, idx) => 
              <div key={idx} 
                  onClick={() => {
                    TransitionHandler(`/Form/${item.id}`, navigate)
                  }} 
                className="w-52 h-64 p-3 mr-5 my-6 shadow-lg shadow-indigo-50 hover:shadow-indigo-200 hover:scale-105 
                cursor-pointer border border-indigo-50 rounded-md transition-all">

                  <p className="text-lg font-medium">{item?.title}</p> 
                  <p className="text-sm font-light text-gray-400">{item?.desc}</p> 
                  
                </div>
              )}
              
        </div>
      </div>
    </div>
    )
}

export default Forms