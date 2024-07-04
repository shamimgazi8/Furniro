import React from 'react';


const ProductDetails = () => {
    return (
        <div className="product-page">
            <div className="product-image">
                <img className='ProductDetailsPhoto' src="https://hatil-image.s3.ap-southeast-1.amazonaws.com/master_image/Kingston-136%20.png" alt="Wooden Cupboard" />
                <img className='ProductDetailsPhoto' src="https://m.media-amazon.com/images/I/61TWbJDdLLL._AC_UF894,1000_QL80_.jpg" alt="Wooden Cupboard" />
            </div>
            <div className="product-details">
                <h1>Wooden Cupboard-HCBH-315 (3 Doors With Glass)</h1>
                <p className="in-stock">In stock</p>
                <p className="discount-price">Discount Price ৳65,911.00</p>
                <p className="save-amount">(Save Amount: ৳3,469)</p>
                <p className="regular-price">Regular Price <span>৳69,380.00</span></p>
                <button className="add-to-cart">Add To Cart</button>
                <div className="offer-timer">
                    <p>Hurry up! Offer Remaining :</p>
                    <div className="timer">
                        <div>5<span>Days</span></div>
                        <div>17<span>Hrs</span></div>
                        <div>20<span>Mins</span></div>
                        <div>18<span>Secs</span></div>
                    </div>
                </div>
                <div className="you-may-also-like">
                    <h2>You May Also Like</h2>
                    <div className="suggested-products">
                        <div className="suggested-product">
                            <img src="https://hatil-image.s3.ap-southeast-1.amazonaws.com/master_image/Oscar-106%20.png" alt="Product 1" />
                            <p>Wooden Cupboard-HCBH-315 (3 Doors With Glass)</p>
                            <p className="price">৳65,911.00</p>
                        </div>
                        <div className="suggested-product">
                            <img src="https://hatil-image.s3.ap-southeast-1.amazonaws.com/Nop_Image/Rhone-173%2B176.jpg" alt="Product 2" />
                            <p>Wooden Lounge Chair-HSSC-334 With Footrest (Brown)</p>
                            <p className="price">৳29,348.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
