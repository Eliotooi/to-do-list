import React from 'react';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import { useAppDispatch, useAppSelector } from '../store/store';
import './style.css'
import { toggleTask } from '../store/task/taskSlice';

interface Props{
  isModalOpen: boolean;
  setIsModalOpen: (newState: boolean) => void;
}

const TaskList = ({setIsModalOpen, isModalOpen }: Props) => {
  // Вынести селекторы в отдельный файл
  const tasks = useAppSelector(state => state.task.tasks)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    console.log(tasks)
  }, [tasks])

  const toggleStatus = (id: string) => {
    dispatch(toggleTask(id))
  };

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

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
        <Modal isOpen={isModalOpen} closeModal={closeModal}>
          <div>
            <div>
              <p className='titleModal'>{task.taskName}</p>
            </div>
            <div>
              <p className='description'>Description:</p>
              <p className='descriptionInfo'>{task.taskDescription}</p>
            </div>
            <div className='checkboxContainer'>
              <p>Status:</p>
              <input  
                  type="checkbox" 
                  checked={task.isDone}
                  onChange={() => toggleStatus(task.id)}
                />
            </div>
          </div>
        </Modal>
        <div style={{width: 500, display: 'flex'}}>
        <li className='modalContainer' onClick={openModal}>
          <div className='taskConatainer'>
            <p className='textModalContainer'>{index + 1}</p>
            <p className='textModalContainer'>{task.taskName}</p>
            <p className='textModalContainer'>{task.taskDescription.slice(0, 20)}</p>
          </div>
        </li>
        <div style={{width:100, backgroundColor:'#cacaca', marginTop: 10, display:'flex'}}>
          <input 
            checked={task.isDone}
            onChange={() => toggleStatus(task.id)}
            className='inputModal' 
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
