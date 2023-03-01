import React from 'react';
import './style.css'
import { Task, selectTasks } from '../store/task/taskSlice';
import { useAppSelector } from '../store/store';

interface Props {
  openModal: (taskToDisplay: Task) => void;
  setIsModalOpen: (newState: boolean) => void;
  toggleStatus: (id: string) => void;
}

const TaskList = ({toggleStatus, openModal }: Props) => {
  const tasks = useAppSelector(selectTasks)

  React.useEffect(() => {
    console.log(tasks)
  }, [tasks])

  return(
    <>
      <div className='taskListName'>
        <div className='columnsContainer'>
          <p className='nameColumns'>ID</p>
          <p className='nameColumns'>TITLE</p>
          <p className='nameColumns'>DESCRIPTONS</p>
          <p className='nameColumns'>STATUS</p>
        </div>
      </div>
     {tasks.map((task, index:number) => (
      <div key={task.id}>
        <div className='checkboxContainer'>
        <li className='modalContainer' onClick={() => openModal(task)}>
          <div className='taskConatainer'>
            <p className='textModalContainer'>{index + 1}</p>
            <p className='textModalContainer'>{task.taskName}</p>
            <p className='textModalContainer'>{task.taskDescription.slice(0, 20)}</p>
          </div>
        </li>
        <div className='checkboxStyle'>
          <input 
            checked={task.isDone}
            onChange={() => toggleStatus(task.id)}
            type="checkbox"
          />
        </div>
        </div>
      </div>
     ))} 
    </>
  )
}

export default TaskList
