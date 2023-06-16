import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// позволяет сделать действие над элементом 
export const useAppDispatch: () => AppDispatch = useDispatch

// позволяет достать элемент
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector