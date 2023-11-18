import React from 'react'
import "./CategoryPage.css"
import Products from '../Product/Products'
import useFetch from '../../Utils/Hooks'
import { useParams } from 'react-router-dom'


const CategoryPage = () => {

  const {id } = useParams()
  const { data } = useFetch(
    `/api/products?populate=*&[filters][categories][id]=${id}`
);

console.log(data + "ok");
  return (
    <div>
     <h2 className='category-heading'>Category Name : { " " }
     {
      data?.data?.[0]?.attributes?.categories?.data?.[0]
          ?.attributes?.title
  }
     </h2>
    <Products products={data} />
    </div>
  )
}

export default CategoryPage