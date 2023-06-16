import { createSlice } from "@reduxjs/toolkit"

// SLICE - сущности необходимые для стейта, тут автоматически генерируется редьюсер и экшены
// REDUCER - производит действия над стейтом не затрагивая внешнюю среду

const answerValues = createSlice({
    name:"answers",
    initialState:{
        info:{
            value:''
        }
    },
    reducers:{
        setValueInfo: (state,action) => {
            state.info.value = state.info.value + ',' + action.payload
        }
    }
})

// используектся для получения данных через dispatch // dispatch(setValueInfo(item))
export const {setValueInfo} = answerValues.actions
export default answerValues.reducer