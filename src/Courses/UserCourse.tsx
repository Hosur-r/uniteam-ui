import { useEffect, useState } from "react"
import { getCourse} from "./req"
import { coursesUrl } from "../App/Urls"
import { ICourse } from "./models"
import Header from "../Header/Header"

import UserSection from "./UserSection"

function UserCourse() {

    let path:string = window.location.pathname
    let id:number = parseInt(path.replace(/[^\d]/g, ''))

    const[course, setCourse] = useState<ICourse>()
    const[title, setTitle] = useState<string>("")
    // const[desc, setDesc] = useState<string>("")

    useEffect(() => {
      awaitForm()
    }, [])

    useEffect(() => {
      if(course){
        setTitle(course.title)
        // setDesc(course.desc)
      }
    }, [course])


    const awaitForm = async() => {
      await getCourse(coursesUrl, id, setCourse)
    } 

    return (
      <div className="mb-10 ">
        <Header/>


        <div className="xs:mx-3 sl:mx-6 flex items-center flex-col">

          <div className="mb-6 xl:w-2/4  flex items-center flex-col p-4">

                  <p className="font-medium text-xl">{title}</p>
                  {/* <p>{desc}</p> */}
          </div>

          <div className="">
            <UserSection sections = {course?.sections} id = {id}/>

          </div>

        </div>

      </div>
    )

}

export default UserCourse