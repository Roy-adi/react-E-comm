import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom'
import './Banner.css'
import { Base_url } from '../../Utils/api';
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const SliderBanner = ({banner}) => {
    const navigate =useNavigate()

    
    
    if (!banner || !banner.data) {
        return null; // You can return null or a loading indicator
    }
    
    return (
        <div className='container-fluid'>
        <Carousel
        className="slider-banner-container"
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        showDots={false}
        slidesToSlide={1}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
    >
    {banner.data.map((item) => {
        console.log('Item:', item);
        return (
            <>
            <div
              key={item.id}
              onClick={() => navigate(`/category/${item.attributes.categories.data[0].id}`)}
              className='banner-img'
              style={{ backgroundImage: `url(${Base_url + item.attributes.img.data[0].attributes.url})` }} // Change made here
            >
              <div className='banner-title'>
                <h4> {item.attributes.title} </h4>
                <p>{item.attributes.desc} </p>
              </div>
            </div>
            </>
        );
    })}
    </Carousel>
        </div>
    );
}

export default SliderBanner