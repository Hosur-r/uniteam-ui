
    // V 1.0.0

// export interface IFormsList{
//     id?:number,
//     title:string,
//     desc:string,
// }


// export interface IForm{
//     desc:string,
//     title:string,
//     fields?:[{
//         answers?:[{
//             content:string,
//         }],
//         title:string,
//     }]
// }

// export interface IField{
//     id?:number,
//     title:string,
//         answer?:[{
//             content:string,
//         }]
// }

// export interface IAnswer{
//     id?:number,
//     content:string,
// }



    // V 2.0.0

export interface IFormsList{
    id?:string,
    title:string,
    description:string,
    created?:bigint,
    updated?:bigint,
}


export interface IForm{
    id:string,
    title: string,
    description: string,
    created?: bigint,
    updated?: bigint,
    questions?: [
        {
            id: string,
            title: string,
            description: string,
            type: number,
            required: boolean,
            answers: [
                {
                    id: string,
                    content: string,
                    cost: number,
                    right: boolean
                },
            ]
        }
    ],
}

export interface IQuestion{
    id?:string,
    title:string,
    description?:string,
    required:boolean,
    type:number,
}

export interface IAnswer{
    id?:string,
    content:string,
    cost:number,
    right:boolean,
}

export interface IAnalytic{
    form: string,
    count: number,
    range: {
        left: number,
        right: number
    },
    median: number,
    histories: [
        {
            id: string,
            selected: [
                {
                    id: string,
                    content: string,
                    cost: number,
                    right: boolean
                }
            ],
            created:bigint
        }
    ]
}