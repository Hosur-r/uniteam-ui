import Header from "../Header/Header"
import { CogIcon, PhotoIcon } from '@heroicons/react/24/solid'
import { bg_1 } from "../media/svgIcons"

function Profile() {

    return (
    <div className="">
        <Header/>
        <div className="flex xs:flex-col xs:max-sl:items-center sl:flex-row sl:mx-6">

        <div>
                <div className="overflow-hidden">
                    <img src="https://cdn-icons-png.flaticon.com/512/4794/4794936.png" alt="" width={300} height={300} className=" shadow-lg shadow-indigo-50 border border-indigo-50 rounded-md p-3 mb-2"/>
                </div>
           

                <div className="shadow-lg shadow-indigo-50 border border-indigo-50 rounded-md p-3 mb-6">
                <p className="p-1 text-center">MashykaMashyka</p>
                </div>

            <div className="shadow-lg shadow-indigo-50 border border-indigo-50 rounded-md p-3 mb-4">
                
                <p className="p-1">Email: fhjas@yandex.ru</p>        
                <p className="p-1">Возраст: 18 лет</p>
            </div>

                <div className="flex items-center shadow-lg shadow-indigo-50 border border-indigo-50 rounded-md p-3 cursor-pointer hover:shadow-indigo-200 transition-all mb-4">
                    <PhotoIcon className="h-8 w-8 text-indigo-600"/>
                    <p className="ml-2">Сменить аватар</p> 
                </div>
                <div className="flex items-center shadow-lg shadow-indigo-50 border border-indigo-50 rounded-md p-3 cursor-pointer hover:shadow-indigo-200 transition-all mb-4">
                    <CogIcon className="h-8 w-8 text-indigo-600"/>
                    <p className="ml-2">Сменить пароль</p> 
                </div>
           
        </div>


        <div className="xs:max-sl:my-10 sl:ml-10 grow">

            <div className="w-full h-72 p-3 mb-5 shadow-lg shadow-indigo-50 border border-indigo-50 rounded-md">
               <p className="text-center font-medium">Созданные курсы</p> 
            </div>

            <div className="sl:flex">
                <div className="w-full grow h-72 p-3 mb-5 shadow-lg shadow-indigo-50  border border-indigo-50 rounded-md">
                    <p className="text-center font-medium">Созданные формы</p> 
                </div>
            </div>
         
            
        </div>
        
        </div>

    </div>
    )
  }


export default Profile