import Header from "../Header/Header"
import { coursesUrl } from "../App/Urls"
import { useEffect, useState, Fragment, useRef } from "react"
import { Dialog, Transition } from '@headlessui/react'
import { FolderPlusIcon } from '@heroicons/react/24/solid'
import { useNavigate } from "react-router-dom"
import { TransitionHandler } from "../handlers"
import { CreateCourse, ListCourses } from "./req"
import { ICoursesList } from "./models"
import { bg_1, bg_2, bg_3 } from "../media/svgIcons"

 function Courses(){

    const [listCourses, setListCourses] = useState<ICoursesList[]>([])
    const [title, setTitle] = useState<string>("")
    const [desc, setDesc] = useState<string>("")
    const [open, setOpen] = useState<boolean>(false)
    const cancelButtonRef = useRef(null)
    const navigate = useNavigate()

    const handler = async () => {
        await ListCourses(coursesUrl, setListCourses)
    }

    useEffect(() => {
        handler()
    }, [])

    return (
    <div>
      
      <Header/> 

      <div className="ml-6">
        <div className="mb-4">
            <h1 className="xs:text-lg lg:text-2xl mb-2 font-medium">Мои курсы</h1>
            <div className="border w-2/3  border-indigo-300"></div>
        </div>

        <div className="flex flex-wrap max-w-[90rem] relative xs:justify-center lg:justify-start ">
            {listCourses?.map((item, idx) => 
              <div key={idx} onClick={() => {TransitionHandler(`/usercourse/${item.id}`, navigate)}} 
              className="overflow-hidden w-72 h-64 p-3 mr-5 my-6 shadow-lg shadow-indigo-50 hover:shadow-indigo-200 hover:scale-105 
              cursor-pointer border border-indigo-50 rounded-md transition-all relative">

                  <p className="text-lg font-medium absolute bottom-3 left-3">{item?.title}</p> 
                  <div className="-z-20 absolute left-0 opacity-40 hover:opacity-100 transition-all">
                    {Math.floor(Math.random() * (3 - 1 + 1) + 1) === 1 ? bg_1 : Math.floor(Math.random() * (3 - 1 + 1) + 1) === 2 ? bg_2 : bg_3}
                    </div>
                </div>
              )}
        </div>


              <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="">
                          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-center">
                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                              Создание нового курса
                            </Dialog.Title>
                            <div className="mt-2 flex justify-center flex-wrap">
                              <input placeholder="Название курса" onChange={event => {setTitle(event.target.value)}} value={title} name="title" type="text" autoComplete="on" maxLength={50} className="block w-2/3 rounded-md border-0 py-1.5 my-2 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                              <input placeholder="Описание" onChange={event => {setDesc(event.target.value)}} value={desc}  name="desc" type="text" autoComplete="on" maxLength={150} className="block w-2/3  rounded-md border-0 py-1.5 my-2 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                          type="button"
                          className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                          onClick={async() => {
                            let courseId = await CreateCourse(coursesUrl, title, desc).then(data => data.data)
                            setOpen(false)
                            setListCourses([...listCourses, {
                                  title:title,
                                  description:desc,
                                  id:courseId?.id
                                }])
                                setTitle("")
                                setDesc("")
                          }}>
                          Создать
                        </button>
                        <button
                          type="button"
                          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                          onClick={() => setOpen(false)}
                          ref={cancelButtonRef}
                        >
                          Отмена
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition.Root>

      </div>
    </div>
    )
}

export default Courses