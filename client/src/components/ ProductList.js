// Displays all products
import React from 'react';

const products = [
  { name: "Trigger Bot (30 Days)", inr: "₹1000", usd: "$12" },
  { name: "1337 Cheat (30 Days)", inr: "₹950", usd: "$11.5" },
  { name: "Custom Discord Bot", inr: "₹400", usd: "$5" },
  { name: "GrandRP BAN EVADE", inr: "₹400", usd: "$5" },
  { name: "Exclusive Leader / Admin Scripts", inr: "₹300", usd: "$4" },
  { name: "GrandRP Moneymethod", inr: "₹2000", usd: "$23" }
];

const ProductList = () => {
  return (
    <div className="product-list">
      <h2>🛍️ Products & Pricing</h2>
      <ul>
        {products.map((product, i) => (
          <li key={i}>
            <strong>{product.name}</strong><br />
            <span>UPI: {product.inr} | Crypto: {product.usd}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
