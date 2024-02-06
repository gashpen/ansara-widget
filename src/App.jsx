import './App.css'
import { useState } from 'react';
import Form from './component/Form';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isActive, setIsActive] = useState({
    color: 'white',
    height: {
      height_200: 200,
      height_210: 210,
      height_220: 220,
    },
    image: 'src/assets/905074.jpg',
    count: 200000,
    nameColorRu: 'Белый',
    colorHex:'#fff',
  })
  const [label, setLabel]= useState(200)
  return (

    <div className='product_card-wrap'>
      <div className='product_card-img'
        style={{
          backgroundImage: 'url(' + `${isActive.image}` + ')',
          transition: '0.5s',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
      </div>
      <div className='product_widget'>
        <div className='product_name-wrap'>
          <span>Шкаф-купе</span>
          <h3>ANSARA</h3>
        </div>
        <div className='product_price-wrap'>
          <span>Стоимость</span>
          <div className='product_change'>{isActive.markup ?
            ((label*1000) / 100) * isActive?.markup
            + (label*1000) :label*1000} ₽
          </div>
        </div>
        <Form
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          setIsActive={setIsActive}
          isActive={isActive}
          setLabel={setLabel}
          label={label}
        />
      </div>
    </div>


  )
}

export default App
