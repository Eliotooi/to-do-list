import { ReactNode } from "react";
import './style.css'

interface Props {
  children: ReactNode;
  isOpen?: boolean;
  closeModal: (e: any) => void;
}

export default function Modal(props: Props) {
  return (
    <>
    {props.isOpen && (
      <div className="modal-overlay" >
        <div  className="modal-box">
          {props.children}
          <button onClick={(e) => props.closeModal(e)}>close</button>
        </div>   
      </div>
    )}
  </>
  );
}
