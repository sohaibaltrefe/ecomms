import axios from 'axios';
import { useQuery } from 'react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar,Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './categories.css'
// Import Swiper styles
import 'swiper/css';  
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/Cartfu';
 
export default function Categories() {

  const getCategories = async ()=>{
  
       const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/categories/active?limit=10`);   
return data;     }
const x=useContext(CartContext);
const {data,isLoading}=useQuery('web_categories',getCategories);
if(isLoading){
  return <p>...loading</p>
 }
  return (
 
  <div className="container bg-danger">
    <div className='swiper-custom-pagination'></div>
     <Swiper       modules={[Navigation, Pagination, Scrollbar,Autoplay ]}

      spaceBetween={50}
      slidesPerView={5.5}
      navigation
      loop={true}
      autoplay={{delay:3000}}
      pagination={{ clickable: true ,
      el: '.swiper-custom-pagination'}}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >


{data?.categories.length? data?.categories.map((category)=>
      <SwiperSlide  key={category._id}>
        <Link to={`/products/category/${category._id}`}>
        <img src={category.image.secure_url}   className=' rounded-circle mt-4 '   />
      
      <h2 className=' fs-4'>{category.name}</h2></Link>
      </SwiperSlide>
 
      ):'<h2>no category</h2>'}
    </Swiper>
    <h2>name is {x.name}</h2>
  </div>
  )
}
