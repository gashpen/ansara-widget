/* eslint-disable react/prop-types */
import './modal.css'
const ModalPurches = (props) => {
    return (
        <div onClick={() => props.setActivePurches(false)} className={props.activePurches ? 'modal active' : 'modal'}>
            <div onClick={e => e.stopPropagation()} className="modal_content">
               <div className='modal_description'>Товар добавлен в корзину!</div>
            </div>
        </div>
    );
}

export default ModalPurches;