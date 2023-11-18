import React, { useState, useEffect } from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Base_url } from '../../Utils/api';
import { useNavigate } from 'react-router-dom';
import { add } from '../../Store/Cartslice';
import { useDispatch } from 'react-redux';
import {   FaFilter } from 'react-icons/fa';

const Products = ({ products }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedCompany, setSelectedCompany] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleAdd = (item) => {
    dispatch(add(item));
  };

  const companyOptions = ['All', 'Sony', 'Boat', 'Bose']; // Add more companies as needed
  const priceRangeOptions = ['All', 'lowest', 'mid-range', 'highest']; // Price range options

  useEffect(() => {
    if (!products || !products.data) {
      return; // Return if products are not available yet
    }

    let filteredByCompany = [...products.data];

    if (selectedCompany !== 'All') {
      filteredByCompany = filteredByCompany.filter(
        (item) => item.attributes.company === selectedCompany
      );
    }

    if (selectedPriceRange === 'All') {
      setFilteredProducts(filteredByCompany);
    } else {
      let filteredByPriceRange = [];

      switch (selectedPriceRange) {
        case 'lowest':
          filteredByPriceRange = filteredByCompany.filter(
            (item) => item.attributes.price >= 500 && item.attributes.price <= 999
          );
          break;
        case 'mid-range':
          filteredByPriceRange = filteredByCompany.filter(
            (item) => item.attributes.price >= 1000 && item.attributes.price <= 4999
          );
          break;
        case 'highest':
          filteredByPriceRange = filteredByCompany.filter(
            (item) => item.attributes.price >= 5000 && item.attributes.price <= 9999
          );
          break;
        default:
          filteredByPriceRange = filteredByCompany;
          break;
      }

      setFilteredProducts(filteredByPriceRange);
    }
  }, [products, selectedCompany, selectedPriceRange]);

  return (
    <div className='container'>
      <div className='row'>
       <div className='d-flex align-items-center mb-4'> 
       <div className='filter-dropdown f-bten'> Company
       <FaFilter className="filter-icon" /> 
       <select className='f-com' onChange={(e) => setSelectedCompany(e.target.value)} value={selectedCompany}>
         {companyOptions.map((company) => (
           <option key={company} value={company}>
             {company}
           </option>
         ))}
       </select>
     </div>
     <div className='filter-dropdown f-bten' style={{marginLeft:'20px'}}>Price
     <FaFilter className="filter-icon" />
       <select className='f-com' onChange={(e) => setSelectedPriceRange(e.target.value)} value={selectedPriceRange}>
         {priceRangeOptions.map((priceRange) => (
           <option key={priceRange} value={priceRange}>
             {priceRange}
           </option>
         ))}
       </select>
     </div>
       </div>
        {filteredProducts.slice(0, 8).map((item) => (
          <div key={item.id} className='col-md-3' onClick={() => navigate(`/product/${item.id}`)}>
            <div className='wsk-cp-product'>
              <div className='wsk-cp-img'>
                <img
                  src={Base_url + item.attributes.img.data[0].attributes.url}
                  alt='Product'
                  className='img-responsive'
                />
              </div>
              <div className='wsk-cp-text'>
                <div className='category'>
                  <span>{item.attributes.company} </span>
                </div>
                <div className='title-product'>
                  <h3> {item.attributes.title} </h3>
                </div>
                <div className='description-prod'>
                  <p>
                    {item.attributes.desc &&
                      `${item.attributes.desc.slice(0, 60)}${
                        item.attributes.desc.length > 60 ? '...' : '.'
                      }`}
                  </p>
                </div>
                <div className='card-footer'>
                  <div className='wcf-left'>
                    <span className='price'>{item.attributes.price}</span>
                  </div>
                  <div className='wcf-right'>
                    <FontAwesomeIcon onClick={() => handleAdd(item)} icon={faCartShopping} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
