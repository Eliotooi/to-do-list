import React from 'react';
import TaskList from './components/TaskList/TaskList';

import AddForm from './components/AddForm/AddForm';
import useModal from './hooks/useModal';


const App: React.FC =()=> {
  const { isOpen, setIsModalOpen } = useModal();

  return (
    <div className='App' >
      <div className='container'>
        <AddForm />
        <TaskList
          isModalOpen={isOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
    </div>
  );
}

export default App
