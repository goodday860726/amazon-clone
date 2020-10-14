import React from 'react'
import { useStateValue } from './StateProvider';
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-fe.ssl-images-amazon.com/images/G/09/JP-hq/2020/img/Kitchen/XCM_Manual_ORIGIN_1249924_JP_2_lp_3313035_1600x600_2X.jpg"
          alt=""
        />
        {console.log(basket)}
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty</h2>
          </div>
        ) : (
          <div>
            <h2 className="checkout_title">Your Shpping Bsaket</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout_right">
          <Subtotal />
          
        </div>
      )}
    </div>
  );
}

export default Checkout
