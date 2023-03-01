import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "./task/taskSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    task: taskSlice.reducer,
  }
})

export const useAppDispatch: ()=>typeof store.dispatch = useDispatch
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector