import { useDispatch } from 'react-redux';
import '../css/Modal.css'
import { closeModal } from '../store/modalSlice';

const Modal = ({modalName, modalImage}) => {
  const dispatch = useDispatch()

  return (
    <div className="modal" onClick={() => dispatch(closeModal())}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-outer" onClick={() => dispatch(closeModal())}>
          <span className="close-inner"></span>
          <span className="close-inner"></span>
        </button>
        <h2>{modalName}</h2>
        <img src={modalImage} alt="" />
      </div>
    </div>
  );
}
 
export default Modal;