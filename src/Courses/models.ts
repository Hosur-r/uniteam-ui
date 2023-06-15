
export interface ICoursesList{
    id?:number,
    title:string,
    description:string,
}

export interface ICourse{
    title:string,
    description:string,
    sections?:[{
        id: number,
        title: string,
      body?:[
        {
          id: number,
          type:string,
          content: string,
        }
      ]
    }]
}

export interface ISection{
        id: number,
        title: string,
      body?: [
        {
          id: number,
          type:string,
          content: string,
        }
      ]
}

export interface IMaterial{
    id:number,
    type?:string,
    content:string | ArrayBuffer | null | undefined,
}