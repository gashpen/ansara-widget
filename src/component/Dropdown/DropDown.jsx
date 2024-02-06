/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './dropdown.css'
import { useState,useRef } from 'react';
import { useClickOutside } from '../utils';

const DropDown = (props) => {
    
    const data = [{ id: 1, label: 200 }, { id: 2, label: 210 },{ id: 3, label: 220 }];
    const [isOpen, setOpen] = useState(false);
    const [items, setItem] = useState(data);
    const [selectedItem, setSelectedItem] = useState(1);
   
    const dropdownRef = useRef(null);
    useClickOutside(dropdownRef,()=>{
        setOpen(false)
    })
    const toggleDropdown = () => setOpen(!isOpen);
    const handleItemClick = (id, label) => {
        selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
        props.setLabel(label)
        setOpen(false)
    }

    return (
        <div className="form_gropup">
            <div className='product_dropdown-height-wrap'>
                <div className='dropdown'>
                    <div className='dropdown-header' onClick={toggleDropdown}>
                        {selectedItem ? items.find(item => item.id == selectedItem).label : props.label}
                        <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
                    </div>
                    <div ref={dropdownRef} className={`dropdown-body ${isOpen && 'open'}`}>
                    <div style={{
                        width:'120px',
                        height: '40px'
                    }}></div>
                        {items.map(item => (
                            <div key={item.id}  className="dropdown-item" onClick={(e)=> handleItemClick(e.target.id, item.label)} id={item.id}>
                                {item.label}
                                <div className={`dropdown-item-dot ${item.id == selectedItem && 'selected'}`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DropDown;