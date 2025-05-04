// Collects Discord username + proof of payment
import React, { useState } from 'react';
import axios from 'axios';

const products = [
  "Trigger Bot (30 Days)",
  "1337 Cheat (30 Days)",
  "Custom Discord Bot",
  "GrandRP BAN EVADE",
  "Exclusive Leader / Admin Scripts",
  "GrandRP Moneymethod"
];

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    userId: '',
    product: '',
    method: '',
    proof: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://your-render-backend.onrender.com/payment/confirm', formData);
      alert('✅ Payment submitted! Ticket will be created shortly.');
    } catch (err) {
      alert('❌ Error submitting. Try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit Payment Info</h2>
      <input name="username" placeholder="Discord Username" onChange={handleChange} required />
      <input name="userId" placeholder="Discord User ID" onChange={handleChange} required />

      <select name="product" onChange={handleChange} required>
        <option value="">Select Product</option>
        {products.map((product, i) => (
          <option key={i} value={product}>{product}</option>
        ))}
      </select>

      <input name="method" placeholder="Payment Method (e.g. UPI, TRC20)" onChange={handleChange} required />
      <input name="proof" placeholder="Payment Screenshot Link (optional)" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PaymentForm;
