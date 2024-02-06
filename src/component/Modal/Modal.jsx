/* eslint-disable react/prop-types */
import './modal.css'
import product from '../data';
const Modal = (props) => {
    return (
        <div onClick={() => props.setActive(false)} className={props.active ? 'modal active' : 'modal'}>
            <div onClick={e => e.stopPropagation()} className="modal_content">
                <div onClick={() => props.setActive(false)} className='modal_header'>Выберите цвет корпуса</div>
                <div  style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    {product.map(elem => {
                        return (
                            <div key={elem.color} className='product_color'>
                                <div className={props.isActive.color === elem.color ? 'product_color-select' : 'd-none'}></div>
                                <input onChange={(e) => props.handleChange(e, elem)} value={elem.color} type='radio' name='color' className={`product_color-img border_anim-png`}
                                    style={elem.texture ? {
                                        backgroundImage: `url(${elem.texture})`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat'
                                    } : {
                                        backgroundColor: elem.colorHex
                                    }}></input>
                                <div className='product_color-name'>
                                    {elem.nameColorRu}
                                </div>
                                <div className='product_discount'>{elem.markup ? `+${elem.markup}% к цене` : ''}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Modal;