import { useEffect, useState } from "react"
import { IMaterial } from "./models"

function UserMaterial (props:any) {

  const [materials, setMaterials] = useState<IMaterial[]>([])

    useEffect(() => {
      props.materials ? setMaterials(props.materials) : setMaterials([])
    }, [props.materials])

    return (
      <div className="w-full">

        {materials?.map((item:any, idx:number) => {
          return(
            <div key={idx} className=" mb-1 pl-3 w-full" >
                {item.type == "string" ? <p className="mt-2 max-w-[828.89px]">{item.content}</p> : <img src={`http://courses.uni-team-inc.online/${item.content}`} width={300} alt="material image" className="max-h-[300px]" />}
            </div>
          )
        })}


        </div>
    )
  }


export default UserMaterial