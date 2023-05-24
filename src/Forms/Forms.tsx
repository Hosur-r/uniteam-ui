import Header from "../Header/Header"
import { formsUrl } from "../App/Urls"
import { ListForms,  CreateForm } from "./req"
import { useEffect, useState, Fragment, useRef } from "react"
import { IFormsList } from "./models"
import { Dialog, Transition } from '@headlessui/react'

 function Forms(){

    const[listForms, setListForms] = useState<IFormsList[]>([])
    const[title, setTitle] = useState<string>("")
    const[desc, setDesc] = useState<string>("")
    const [open, setOpen] = useState<boolean>(false)
    const cancelButtonRef = useRef(null)

    const handler = async () => {
        await ListForms(formsUrl, setListForms)
    }

    useEffect(() => {
        handler()
    }, [])

    return (
      <div>
            <Header/>
        <div className="flex justify-center items-center flex-wrap max-w-7xl">
            {listForms?.map((item, idx) => 
              <div key={idx} className="border w-60 h-80 p-3 mx-10 my-6">
                  <p className="">{item?.desc}</p> 
                  <p className="">{item?.title}</p> 
                </div>
              )}
              <button onClick={() => {setOpen(true)}}>Добавить форму</button>
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
                              Создание новой формы
                            </Dialog.Title>
                            <div className="mt-2 flex justify-center flex-wrap">
                              <input placeholder="Название" onChange={event => {setTitle(event.target.value)}} value={title} name="title" type="text" autoComplete="on" className="block w-2/3 rounded-md border-0 py-1.5 my-2 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                              <input placeholder="Описание" onChange={event => {setDesc(event.target.value)}} value={desc}  name="desc" type="text" autoComplete="on" className="block w-2/3  rounded-md border-0 py-1.5 my-2 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                          type="button"
                          className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                          onClick={() => {
                            CreateForm(title, desc)
                            setOpen(false)
                            setListForms([...listForms, {
                              title:title,
                              desc:desc,
                            }])
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
    )
}

export default Forms