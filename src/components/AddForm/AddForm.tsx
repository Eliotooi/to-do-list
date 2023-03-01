import { useRef, useState } from 'react';
import { addTask } from '../store/task/taskSlice';
import { useAppDispatch } from '../../components/store/store';
import "./style.css";

const AddForm =()=> {
  const dispatch = useAppDispatch()
  const taskName = useRef<string>('')
  const taskDescription = useRef<string>('')
  const [nameError, setNameError] = useState(false)
  const [descError, setDescError] = useState(false)

  const onSumbit = () => {
    const isNameValid = taskName.current.trim().length > 0
    const isDescValid = taskDescription.current.trim().length > 0

    setNameError(!isNameValid)
    setDescError(!isDescValid)

    if (isNameValid && isDescValid) {
      dispatch(addTask({
        id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())).toString(),
        taskName: taskName.current, 
        taskDescription: taskDescription.current,
        isDone: false
      }))
    }
  }

  return (
    <div>
      <div>
        <div className='inputContainer'>
          <div className='container'>
            <p className='title'>Title:</p>
            <input 
              className={`input ${nameError && 'input-error'}`}
              type='text' 
              name='taskName'
              placeholder='Enter title' 
              onChange={(e)=>(
                taskName.current = e.target.value
              )}
            />
            <div className='error-message'>
              {nameError && 'This field is empty'}
            </div>
          </div>
          <div className='container'>
            <p className='title'>Description:</p>
            <input 
              className={`input ${descError && 'input-error'}`}
              type='text' 
              name='taskDescription' 
              placeholder='Enter description'  
              onChange={(e)=>(taskDescription.current = e.target.value)}
            />
            <div className='error-message'>
              {descError && 'This field is empty'}
            </div>
          </div>
          <button 
           onClick={onSumbit}
           className='btnCreate'
          >
            Crate
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddForm
