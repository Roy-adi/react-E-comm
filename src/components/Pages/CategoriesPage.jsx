import React from 'react'
import Categories from '../Categories/Categories'
import './CategoriesPage.css'
import { myContext } from '../../Utils/Context';
import { useContext , useEffect } from 'react';
import { fetchDataFromApi } from '../../Utils/api';
const CategoriesPage = () => {
  
    const {categories ,setCategories } = useContext(myContext) 

    useEffect(() => {
        getCategories();

    }, []);

    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            console.log(res);
            setCategories(res)
        });
    };
      console.log(categories , "ok");
  return (
    <div className='cat-page'>
      <h2> Choose your Category</h2>
      <div className='cat-card'> <Categories categories={categories} /> </div>
    </div>
  )
}

export default CategoriesPage