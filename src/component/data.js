import white from '../assets/905074.jpg'
import nacre from '../assets/905075.jpg'
import darkGrey from '../assets/905076.jpg'
import sonoma from '../assets/905077.jpg'
import sonomaTexture from '../assets/793731.jpg'
const product = [
    {
        color: 'white',
        nameColorRu: 'Белый',
        colorHex: '#fff',
        image: white,
        count: 200000,
        height: {
            height_200: 200,
            height_210: 210,
            height_220: 220,
        },
    },
    {
        color: 'nacre',
        nameColorRu: 'Перламутр',
        colorHex: '#D8CEC4',
        image: nacre,
        count: 200000,
        markup: 5,
        height: {
            height_200: 200,
            height_210: 210,
            height_220: 220,
        },
    },
    {
        color: 'darkGrey',
        nameColorRu: 'Темно-серый',
        colorHex: '#6E6E6E',
        image: darkGrey,
        count: 200000,
        markup: 7,
        height: {
            height_200: 200,
            height_210: 210,
            height_220: 220,
        },
    },
    {
        color: 'sonoma',
        nameColorRu: 'Сонома',
        image: sonoma,
        texture: sonomaTexture,
        count: 200000,
        markup: 10,
        height: {
            height_200: 200,
            height_210: 210,
            height_220: 220,
        },
    }
]

export default product