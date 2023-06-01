export interface IFormsList{
    id?:number,
    title:string,
    desc:string,
}


export interface IForm{
    desc:string,
    title:string,
    fields?:[{
        answers?:[{
            content?:string,
        }],
        title?:string,
    }]
}

export interface IField{
    id?:number,
    title:string,
    answer?:[{}]
}

export interface IAnswer{
    id?:number,
    content:string,
}