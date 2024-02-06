/* eslint-disable react/prop-types */
import './form.css'
import DropDown from './Dropdown/DropDown';
import Modal from './Modal/Modal';
import { useState } from 'react';
import ModalPurches from './Modal/ModalPurches';
const Form = (props) => {
    const [active, setActive] = useState(false)
    function handleSubmit(e) {
        e.preventDefault()
    }
    const [activePurches, setActivePurches] = useState(false)
    function handleChange(e, obj) {
        props.setIsActive(obj);
    }
    return (
        <form onSubmit={(e) => { handleSubmit(e) }} className='product_form' action="">
            <div className='form_product-change'>
                <div className='hight_change changer'>
                    <span>Высота</span>
                    <DropDown
                        product={props.isActive.height}
                        label={props.label}
                        setLabel={props.setLabel}
                    />
                </div>
                <div className='color_change-wrap changer'>
                    <span>Цвет корпуса</span>
                    <div className='color_change'>
                        <div onClick={() => setActive(true)} style={props.isActive.texture ? {
                            backgroundImage: `url(${props.isActive.texture})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        } : {
                            backgroundColor: props.isActive.colorHex
                        }} className='color_change-win border_anim'>
                        </div>
                        <div className='color_change-name'>{props.isActive.nameColorRu}</div>
                    </div>
                </div>
            </div>
            <Modal isActive={props.isActive} handleChange={handleChange} active={active} setActive={setActive} />
            <button onClick={() => setActivePurches(true)} className='form_button'>Добавить в корзину</button>
            <ModalPurches setActivePurches={setActivePurches} activePurches={activePurches} />
        </form>
    );
}

export default Form;