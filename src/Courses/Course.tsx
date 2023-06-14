import { useEffect, useState } from "react"
import { getCourse, DeleteCourse, UpdateCourse } from "./req"
import { coursesUrl } from "../App/Urls"
import { ICourse } from "./models"
import Header from "../Header/Header"
import { DocumentMinusIcon } from "@heroicons/react/24/solid"
import { TransitionHandler } from "../handlers"
import { useNavigate } from "react-router-dom"
import Section from "./Section"

function Course() {

    let path:string = window.location.pathname
    let id:number = parseInt(path.replace(/[^\d]/g, ''))
    const navigate = useNavigate()
    const[course, setCourse] = useState<ICourse>()
    const[title, setTitle] = useState<string>("")
    const[desc, setDesc] = useState<string>("")

    useEffect(() => {
      awaitForm()
    }, [])

    useEffect(() => {
      if(course){
        setTitle(course.title)
        // setDesc(course.desc)
      }
    }, [course])

    useEffect(() => {
      const timeoutID:NodeJS.Timeout = setTimeout(() => UpdateCourse(id, coursesUrl, title, desc), 3000);
      return () => clearTimeout(timeoutID);
    }, [title, desc]);

    const awaitForm = async() => {
      await getCourse(coursesUrl, id, setCourse)
    } 

    return (
      <div className="mb-10 ">
        <Header/>

        <div className="flex items-strech fixed bottom-4 right-4 cursor-pointer opacity-75 hover:opacity-100 transition-all z-10 " onClick={async() => {
              await DeleteCourse(id, coursesUrl)
              TransitionHandler("/courses", navigate)
            }}>
                <p className="text-sm px-2 text-gray-900">Удалить курс</p>
                <DocumentMinusIcon className="h-6 w-6 text-red-600"/>
        </div>

        <div className="xs:mx-3 sl:mx-6 flex items-center flex-col">

          <div className="mb-6 xl:w-2/4  flex items-center flex-col p-4">

                  <input placeholder="Название формы" 
                    onChange={(event) => {setTitle(event.target.value)}} 
                  value={title} name="title" type="text" maxLength={50} autoComplete="on" 
                  className="block w-full lg:w-2/3 py-1.5 my-2 pl-2 xs:text-sm xs:leading-6 formInput"/>

                  <textarea placeholder="Описание курса" wrap="soft" 
                    onChange={(event) => {setDesc(event.target.value)}} 
                    maxLength={150} rows={1} cols={100} value={desc} 
                    className="block mb-1 w-full xs:h-32 h-28 lg:w-2/3 resize-none py-1.5 my-2 pl-2 xs:text-sm xs:leading-6 formInput"> 
                  </textarea>
          </div>

          <div className="">
            <Section sections = {course?.sections} id = {id}/>

          </div>

        </div>

      </div>
    )

}

export default Course