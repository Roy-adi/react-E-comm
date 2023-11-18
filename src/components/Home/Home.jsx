import React from 'react'
import './Home.css'
import Banner from '../Banner/Banner'
import Categories from '../Categories/Categories'
import Products from '../Product/Products'
import {fetchDataFromApi} from '../../Utils/api'
import { useState , useEffect , useContext } from 'react'
import { myContext } from '../../Utils/Context'
import News from '../News/News'
import Footer from '../Footer/Footer'
import SliderBanner from '../Banner/SliderBanner'

const Home = () => {
const { products, setProducts, categories , setCategories ,banner , setbanner } = useContext(myContext)

  useEffect(() => {
    getCategories();
    getProducts();
    getBanners();
}, []);

const getProducts = () => {
  fetchDataFromApi("/api/products?populate=*").then((res) => {
      setProducts(res);
  });
};

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
        console.log(res);
        setCategories(res)
    });
};

const getBanners = () => {
  fetchDataFromApi("/api/banners?populate=*").then((res) => {
      console.log(res);
      setbanner(res)
  });
};



  return (
    <>
     <div className='home-bg'> 
     <div className="d-none d-md-block">
      <SliderBanner banner={banner} />
     </div>
     <div className='products-list'>
     <div className="contents">
     <h1 className="title">
        Categories
       <div className="aurora">
         <div className="aurora__item"></div>
         <div className="aurora__item"></div>
         <div className="aurora__item"></div>
         <div className="aurora__item"></div>
       </div>
     </h1>
   </div>
   <div className='list'> <Categories categories={categories} /> </div>
    </div>

     <div className='products-list'>
     <div className="contents">
     <h1 className="title">
       Products List
       <div className="aurora">
         <div className="aurora__item"></div>
         <div className="aurora__item"></div>
         <div className="aurora__item"></div>
         <div className="aurora__item"></div>
       </div>
     </h1>
   </div>
   <div className='list'> <Products products={products} /> </div>
    </div>
     
     </div>
    </>
  )
}

export default Home