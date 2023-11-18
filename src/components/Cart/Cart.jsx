import React from 'react'
import './Cart.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { remove } from '../../Store/Cartslice'
import { Base_url } from '../../Utils/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { loadStripe } from "@stripe/stripe-js";
import axiosInstance from '../../Utils/api'

const Cart = () => {

  const stripePromise = loadStripe(
    "pk_test_51NrcIbSC43LF4ip5b8HWFvfwgt486EDQEY7rvJifNFqYmUBTt5mROYhHzPyt835gtxrdl6Xhn4auYAD0i10ZlI1Z00cw0TSyf6"
);

const handlePayment = async () => {
  try {
    const stripe = await stripePromise;
    const res = await axiosInstance.post("/api/orders", {
      
    });
    console.log("Stripe Session ID:", res.data.stripeSession.id);
    await stripe.redirectToCheckout({
      sessionId: res.data.stripeSession.id,
    });
  } catch (err) {
    console.log(err);
  }
};


    const products = useSelector((state)=>state.cart)
    const dispatch = useDispatch()
    const handleRemove =(productId)=>{
  dispatch((remove(productId)))
}

const cumulativePrice = products.reduce((total, item) => {
    return total + item.attributes.price;
  }, 0);

  let total = 0

  if (cumulativePrice > 0){
    total = cumulativePrice + 35
  }

return (
    <section className="cart-section">
    <div className="container">
      <div className="cart-wrap">
        <a id="clear-cart" href="#">
          Clear Cart
          <i className="fa fa-trash-o" aria-hidden="true" />
        </a>
        <div className="row">
          <div className="col-md-12 col-lg-8 col-xl-8">
            <div className="cart-wrap-left">
            {
                products.map((item)=>(

                    <div className="cart-wrap-box re-item">
                      <div className="cart-wrap-box-img">
                        <a href="#">
                        <img src={Base_url + (item.attributes.img?.data[0]?.attributes?.url || '')} alt="" />
                        </a>
                      </div>
                      <div className="cart-wrap-box-content item">
                        <p> {item.attributes.title} </p>
                        <ul className="cart-wrap-box-content-buttons">
                          <li>
                            <div className="align-center picker d-flex">
                              <p>
                                <a href="#" className="btn-quantity plus">
                                <FontAwesomeIcon icon={faPlus} />
                                </a>
                              </p>
                              <div className="col_1of2 quantity-text">
                                <p>
                                  <span className="current_quantity">1</span>
                                </p>
                              </div>
                              <a href="#" className="btn-quantity minus">
                              <FontAwesomeIcon icon={faMinus} />
                              </a>
                              <p />
                              <input
                                type="hidden"
                                className="quantity_field"
                                name="quantity"
                                data-price="15.50"
                                defaultValue={1}
                              />
                            </div>
                          </li>
                          <li style={{marginLeft:'30px'}}>
                            <p>
                              <a href="#">
                              <FontAwesomeIcon icon={faHeart} style={{color: "#d52a2a",}} />
                               
                              </a>
                            </p>
                          </li>
                          <li>
                            <p>
                              <a className="btn-remove" href="#" onClick={()=>handleRemove(item.id)}>
                              <FontAwesomeIcon icon={faTrash} />
                                
                              </a>
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div className="price">
                        <p>₹ { item.attributes.price }</p>
                      </div>
                    </div>
                ))
            }
            </div>
          </div>
          <div className="col-md-12 col-lg-4 col-xl-4">
            <div className="cart-wrap-right">
              <div className="payment-details">
                <table className="table table-striped">
                  <thead>
                    
                  </thead>
                  <thead>
                    <tr>
                      <th>Sub Total</th>
                      <th>₹ {cumulativePrice}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Estimated Tax</td>
                      <td>₹ 35</td>
                    </tr>
                    <tr>
                      <td>Shipping Charge</td>
                      <td>Free</td>
                    </tr>
                   
                    <tr>
                      <td>Payble Amount</td>
                      <td>₹ {total} </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="offer-sec">
                <p className="offer-heading">Offer</p>
                <div className="d-flex align-items-baseline">
                  <p>
                    <img src="images/discount.png" alt="" />
                    Apply Coupon
                  </p>
                  
                </div>
                <div className="apply-form">
                  <input
                    type="text"
                    name=""
                    placeholder="Have A Coupon? Type here"
                  />
                  <a href="#">Apply</a>
                </div>
              </div>
              <div className="checkout-button mb-5"  onClick={handlePayment} >
                  <a> Proceed to checkout </a> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Cart