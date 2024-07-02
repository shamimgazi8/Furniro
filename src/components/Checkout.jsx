import React, { useState } from 'react';

const CheckoutPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    paymentMethod: 'credit',
    cardNumber: '',
    cardExp: '',
    cardCvc: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Order submitted', form);
  };

  return (
    <div className="checkout">
      <div className="checkout-container">
        <h2>Checkout</h2>
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-list">
            <div className="summary-item">
              <p>Sofa</p>
              <p>1</p>
              <p>$299.99</p>
            </div>
            <div className="summary-item">
              <p>Dining Table</p>
              <p>1</p>
              <p>$499.99</p>
            </div>
            <div className="summary-item">
              <p>Chair</p>
              <p>2</p>
              <p>$159.98</p>
            </div>
            <div className="summary-total">
              <p>Total:</p>
              <p>$1,159.96</p>
            </div>
          </div>
        </div>

        <form className="checkout-form" onSubmit={handleSubmit}>
          <section className="shipping-info">
            <h3>Shipping Information</h3>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={form.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={form.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                name="state"
                value={form.state}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="zip">ZIP Code</label>
              <input
                type="text"
                id="zip"
                name="zip"
                value={form.zip}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                value={form.country}
                onChange={handleChange}
                required
              />
            </div>
          </section>

          <section className="payment-info">
            <h3>Payment Information</h3>
            <div className="form-group">
              <label htmlFor="paymentMethod">Payment Method</label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={form.paymentMethod}
                onChange={handleChange}
                required
              >
                <option value="credit">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bank">Bank Transfer</option>
              </select>
            </div>
            {form.paymentMethod === 'credit' && (
              <>
                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={form.cardNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cardExp">Expiration Date</label>
                  <input
                    type="text"
                    id="cardExp"
                    name="cardExp"
                    value={form.cardExp}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cardCvc">CVC</label>
                  <input
                    type="text"
                    id="cardCvc"
                    name="cardCvc"
                    value={form.cardCvc}
                    onChange={handleChange}
                    required
                  />
                </div>
              </>
            )}
            {form.paymentMethod === 'paypal' && (
              <p>You'll be redirected to PayPal to complete your purchase.</p>
            )}
            {form.paymentMethod === 'bank' && (
              <div className="bank-info">
                <p>
                  <strong>Bank Name:</strong> Your Bank
                </p>
                <p>
                  <strong>Account Number:</strong> 1234567890
                </p>
                <p>
                  <strong>Sort Code:</strong> 12-34-56
                </p>
              </div>
            )}
          </section>

          <button type="submit" className="submit-button">
            Place Order
          </button>
        </form>

        <section className="order-review">
          <h3>Review Your Order</h3>
          <div className="review-list">
            <div className="review-item">
              <p>Sofa</p>
              <p>1</p>
              <p>$299.99</p>
            </div>
            <div className="review-item">
              <p>Dining Table</p>
              <p>1</p>
              <p>$499.99</p>
            </div>
            <div className="review-item">
              <p>Chair</p>
              <p>2</p>
              <p>$159.98</p>
            </div>
            <div className="review-total">
              <p>Total:</p>
              <p>$1,159.96</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CheckoutPage;
