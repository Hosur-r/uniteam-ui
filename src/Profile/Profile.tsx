import Header from "../Header/Header"
import { CogIcon, PhotoIcon, FolderPlusIcon, DocumentPlusIcon } from '@heroicons/react/24/solid'
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Dialog, Transition } from '@headlessui/react'
import { useEffect, useState, Fragment, useRef } from "react"
import { IFormsList } from "../Forms/models";
import { ICoursesList } from "../Courses/models";
import { CreateForm, ListForms } from "../Forms/req";
import { CreateCourse } from "../Courses/req";
import { formsUrl, coursesUrl } from "../App/Urls";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

function Profile() {

    const [listForms, setListForms] = useState<IFormsList[]>([])
    const [listCourses, setListCourses] = useState<ICoursesList[]>([])
    const [serviceHandler, setServiseHandler] = useState<string>("")
    const [title, setTitle] = useState<string>("")
    const [desc, setDesc] = useState<string>("")
    const [open, setOpen] = useState<boolean>(false)
    const cancelButtonRef = useRef(null)

    const handler = async () => {
        await ListForms(formsUrl, setListForms)
    }

    useEffect(() => {
        handler()
    }, [])

    const modal = (type:string) => {
        setServiseHandler(type)
        setOpen(true)
    }

    const formHandler = async() => {
        let formId = await CreateForm(formsUrl, title, desc).then(data => data.data)
        setOpen(false)
            setListForms([...listForms, {
              title:title,
              desc:desc,
              id:formId?.id
            }])
            setTitle("")
            setDesc("")
      }
    

    const courseHandler = async() => {
        let courseId = await CreateCourse(coursesUrl, title, desc).then(data => data.data)
        setOpen(false)
            setListCourses([...listCourses, {
                title:title,
                description:desc,
                id:courseId?.id
            }])
            setTitle("")
            setDesc("")
    }


    return (
    <div className="">
        <Header/>
        <div className="flex xs:flex-col xs:max-lg:items-center lg:flex-row lg:mx-6">

        <div>
                <div className="overflow-hidden">
                    <img src="https://cdn-icons-png.flaticon.com/512/4794/4794936.png" alt="" width={300} height={300} className="shadow-lg shadow-indigo-50 border border-indigo-50 rounded-md p-3 mb-2"/>
                </div>
           

                <div className="shadow-lg shadow-indigo-50 border border-indigo-50 rounded-md p-3 mb-8">
                    <p className="p-1 text-center">MashykaMashyka</p>
                </div>

            <div className="shadow-lg shadow-indigo-50 border border-indigo-50 rounded-md p-3 mb-4">
                <p className="p-1">Email: fhjas@yandex.ru</p>        
                <p className="p-1">Возраст: 18 лет</p>
            </div>

                <div className="flex items-center shadow-lg shadow-indigo-50 border border-indigo-50 rounded-md p-3 cursor-pointer hover:shadow-indigo-200 transition-all mb-4 relative">
                    <PhotoIcon className="h-8 w-8 text-indigo-500 cursor-pointer"/>
                    <p className="ml-2 cursor-pointer">Изменить аватар</p> 
                    <input type="file"  className="text-sm absolute opacity-0 cursor-pointer " onChange={e => {
                           if (!e.target.files) return;
                           var reader = new FileReader();
                           reader.readAsDataURL(e.target.files[0]);
                        //    reader.onload = () => {setImg(reader.result)}
                           window.location.reload()
                    }} />
                </div>
                <div className="flex items-center shadow-lg shadow-indigo-50 border border-indigo-50 rounded-md p-3 cursor-pointer hover:shadow-indigo-200 transition-all mb-4">
                    <CogIcon className="h-8 w-8 text-indigo-500"/>
                    <p className="ml-2">Сменить пароль</p> 
                </div>

                <div className="flex items-center shadow-lg shadow-indigo-50 border border-indigo-50 rounded-md p-3 cursor-pointer hover:shadow-indigo-200 transition-all mb-4" 
                    onClick={() => {
                        modal('course')
                    }}>
                    <FolderPlusIcon className="h-8 w-8 text-indigo-500"/>
                    <p className="ml-2">Создать новый курс</p> 
                </div>

                <div className="flex items-center shadow-lg shadow-indigo-50 border border-indigo-50 rounded-md p-3 cursor-pointer hover:shadow-indigo-200 transition-all mb-4"
                    onClick={() => {
                        modal('form')
                    }}>
                    <DocumentPlusIcon className="h-8 w-8 text-indigo-500"/>
                    <p className="ml-2">Создать новую форму</p> 
                </div>
           
        </div>


        <div className="xs:max-lg:my-10 lg:ml-10 grow">

            <div className="w-full h-80 p-6 mb-5 shadow-lg shadow-indigo-50 border border-indigo-50 rounded-md">
               <p className="text-center font-medium mb-2">Созданные курсы</p> 
               <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    navigation={ window.innerWidth >= 800 ? true : false}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide className="cursor-pointer">Slide 1</SwiperSlide>
                    <SwiperSlide className="cursor-pointer">Slide 2</SwiperSlide>
                    <SwiperSlide className="cursor-pointer">Slide 3</SwiperSlide>
                    <SwiperSlide className="cursor-pointer">Slide 4</SwiperSlide>
                    <SwiperSlide className="cursor-pointer">Slide 5</SwiperSlide>
                    <SwiperSlide className="cursor-pointer">Slide 6</SwiperSlide>
                    <SwiperSlide className="cursor-pointer">Slide 7</SwiperSlide>
                    <SwiperSlide className="cursor-pointer">Slide 8</SwiperSlide>
                    <SwiperSlide className="cursor-pointer">Slide 9</SwiperSlide>
                </Swiper>

            </div>

                <div className="w-full grow h-80 p-6 mb-5 shadow-lg shadow-indigo-50  border border-indigo-50 rounded-md">
                    <p className="text-center font-medium">Созданные формы</p> 
                    <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    navigation={window.innerWidth >= 800 ? true : false}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide className="cursor-pointer">Slide 1</SwiperSlide>
                    <SwiperSlide className="cursor-pointer">Slide 2</SwiperSlide>
                    <SwiperSlide className="cursor-pointer">Slide 3</SwiperSlide>
                    <SwiperSlide className="cursor-pointer">Slide 4</SwiperSlide>
                    <SwiperSlide className="cursor-pointer">Slide 5</SwiperSlide>
                    <SwiperSlide className="cursor-pointer">Slide 6</SwiperSlide>
                    <SwiperSlide className="cursor-pointer">Slide 7</SwiperSlide>
                    <SwiperSlide className="cursor-pointer">Slide 8</SwiperSlide>
                    <SwiperSlide className="cursor-pointer">Slide 9</SwiperSlide>
                </Swiper>
                </div>
         
            
        </div>
        
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
                        <div>
                          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-center">
                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                            {serviceHandler === "form" ? <p>Создание новой формы</p> : <p>Создание нового курса</p>}
                            </Dialog.Title>
                            <div className="mt-2 flex justify-center flex-wrap">
                              <input placeholder="Название" onChange={event => {setTitle(event.target.value)}} value={title} name="title" type="text" autoComplete="on" maxLength={18} className="block w-full rounded-md border-0 py-1.5 my-2 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                              <input placeholder="Описание" onChange={event => {setDesc(event.target.value)}} value={desc}  name="desc" type="text" autoComplete="on" maxLength={150} className="block w-full rounded-md border-0 py-1.5 my-2 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                          type="button"
                          className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                          onClick={() => {
                            serviceHandler === "form" ? formHandler() : courseHandler()
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


export default Profile