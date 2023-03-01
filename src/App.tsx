import React, { useState } from 'react';
import TaskList from './components/TaskList/TaskList';

import AddForm from './components/AddForm/AddForm';
import Modal from './components/Modal/Modal';
import { Task, toggleTask } from './components/store/task/taskSlice';
import { useAppDispatch } from './components/store/store';


const App: React.FC =()=> {
  const [isOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const dispatch = useAppDispatch()

  const openModal = (taskToDisplay: Task) => {
    console.log(taskToDisplay)
    setSelectedTask(taskToDisplay)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTask(null)
  }

  const toggleStatus = (id: string) => {
    dispatch(toggleTask(id))

    if (selectedTask) {
      setSelectedTask({
        ...selectedTask,
        isDone: !selectedTask.isDone
      })
    }
  };

  return (
    <div className='App' >
      <div className='container'>
        <Modal
          isOpen={isOpen}
          task={selectedTask}
          closeModal={closeModal}
          toggleStatus={toggleStatus}
        />
        <AddForm />
        <TaskList
          openModal={openModal}
          setIsModalOpen={setIsModalOpen}
          toggleStatus={toggleStatus}
        />
      </div>
    </div>
  );
}

export default App
