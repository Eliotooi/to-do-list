import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  id: string;
  taskName: string;
  taskDescription: string;
  isDone: boolean;
}

interface TaskState{
  tasks: Task[];
}

const initialState: TaskState = {
  tasks:[],
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask:(state, action: PayloadAction<Task>) => { 
      state.tasks.push({
        taskDescription: action.payload.taskDescription, 
        id: action.payload.id,
        taskName: action.payload.taskName,
        isDone: action.payload.isDone
      })
    },
    toggleTask: (state, action: PayloadAction<string>) => { 
      state.tasks = state.tasks.map(task => {
        if (task.id === action.payload) {
          console.log(task.id, ' to be toggled')
          return {
            ...task,
            isDone: !task.isDone
          }
        }

        return task
      })
    }
  }
})

export default taskSlice.reducer
export const { addTask, toggleTask} = taskSlice.actions
