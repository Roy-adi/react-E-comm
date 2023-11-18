import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Productdetail.css'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../../Utils/Hooks'
import { Base_url } from '../../Utils/api'
import Relatedproducts from './Relatedproducts'
import { add } from '../../Store/Cartslice'
import { useDispatch } from 'react-redux'
import { useAuthContext } from '../AuthContext/AuthContext'
import { message } from 'antd'


const Productdetail = () => {

  const { user, setUser } = useAuthContext();
  const navigate = useNavigate()
  const dispatch =useDispatch();
  const handleAdd =(e)=>{
    if(user){
      dispatch(add(e))
    }else{
      message.success(`Do SignUp !`);
      navigate('/signup')
    }
    
 }
const { id } = useParams()
const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

if (!data) return;
  const product = data?.data?.[0]?.attributes;
 
  return (
    <div className='container prod-sec'>
     <div className='row' style={{alignItems:"center"}}> 
    <div className='col-md-6'>
    <div className='left'>
    <img src= {Base_url+product.img.data[0].attributes.url} alt='img' />
    </div>
    </div>
    <div className='col-md-6'> 
    <div class="right-side">
    <p id="perfume">{product.company} </p>
    <h1 id="header"> {product.title} </h1>
    <p id="description">{product.desc} </p>
    <div class="price">
      <h1 id="number-discount">$ : {product.price} </h1>
      
    </div>
    <button class="cart-btn" onClick={()=>handleAdd(data?.data?.[0])}>
    <FontAwesomeIcon icon={faCartShopping} />
      <p id="btn-text"  >Add to Cart</p>
    </button>          
  </div>
    </div>
    </div>
    <Relatedproducts  poductid={id} categoryid={product.categories.data[0].id} />
    </div>
  )
}

export default Productdetail