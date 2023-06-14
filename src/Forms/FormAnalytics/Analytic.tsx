import { useEffect, useState } from "react"
import { analyticsUrl } from "../../App/Urls"
import Header from "../../Header/Header"
import { IAnalytic } from "../models"
import { GetAnalytics } from "../req"
import Selected from "./Selected"

function Analytic() {

    let path:string = window.location.pathname.slice(11)
    const[analytic, setAnalytic] = useState<IAnalytic>()

    useEffect(() => {
      awaitAnalytic()
    }, [])

    const awaitAnalytic = async() => {
      await GetAnalytics(analyticsUrl, path, setAnalytic)
    } 

    return (
      <div className="mb-10 ">
        <Header/>

        <div className="xs:mx-3 sl:mx-6 flex items-center flex-col ">

          <div className="mb-6 xs:w-full sm:w-[45vh] sl:w-[55vh] md:w-[60vw] lg:w-[45vw]  p-4 shadow-lg shadow-indigo-50 border border-indigo-50 rounded-md">

            <div className="flex flex-col items-center mb-4">
                      <p className="my-1">formId: {analytic?.form}</p>
                      <p className="my-1">Count: {analytic?.count}</p>
                      <p className="my-1">Medial: {analytic?.median}</p>
                    <div className="flex items-center">
                      <p className="mx-4">Range-left: {analytic?.range.left}</p>
                      <p className="mx-4">Range-right: {analytic?.range.right}</p>
                    </div>
            </div>

                  <div className="shadow-lg shadow-indigo-50 border border-indigo-50 rounded-md w-full p-5">
                  {analytic?.histories.map((item, idx) => {
                    return(
                      <div key={idx}>
                          <p className="py-3 font-medium">Вопрос: Сколько лет?</p>
                          {/* <p>{item.created}</p> */}
                          <Selected selected = {item.selected}/>
                      </div>
                    )
                  })}
                  </div>
              
          </div>

          <div className="">
          </div>

        </div>

      </div>
    )

}

export default Analytic