import React from 'react';
import ProductList from './components/ProductList';
import PaymentForm from './components/PaymentForm';

function App() {
  return (
    <div className="container">
      <h1>Welcome to GrandX $tore</h1>
      <ProductList />
      <PaymentForm />
    </div>
  );
}

export default App;
