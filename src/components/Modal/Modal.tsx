import './style.css'
import { Task } from "../store/task/taskSlice";

interface Props {
  isOpen?: boolean;
  task: Task | null,
  closeModal: (e: any) => void;
  toggleStatus: (id: string) => void;
}

export default function Modal({ 
  isOpen, 
  task, 
  toggleStatus, 
  closeModal 
}: Props) {

  return (
    <>
    {isOpen && task && (
      <div className="modal-overlay" >
        <div  className="modal-box">
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
          <button onClick={(e) => closeModal(e)}>close</button>
        </div>   
      </div>
    )}
  </>
  );
}
