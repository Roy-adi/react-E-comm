import React from 'react'
import './rp.css'
import Products from './Products'
import useFetch from '../../Utils/Hooks'

const Relatedproducts = ({categoryid,poductid}) => {

    const { data } = useFetch( `/api/products?populate=*&filters[id][$ne]=${poductid}&filters[categories][id]=${categoryid}`)
    console.log(data);

  return (
    <div className='related-products'>
      <h2>Related Products</h2>
      <Products products={data} />
    </div>
  )
}

export default Relatedproducts