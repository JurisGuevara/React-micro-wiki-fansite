import { useDispatch, useSelector } from 'react-redux';
import '../css/Modal.css'
import { closeModal } from '../store/modalSlice';

const Modal = ({modalName, modalImage}) => {
  const dispatch = useDispatch()

  return (
    <div className="modal" onClick={() => dispatch(closeModal())}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{modalName}</h2>
        <img src={modalImage} alt="" />
      </div>
    </div>
  );
}
 
export default Modal;