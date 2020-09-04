import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ConnectionStatus from './ConnectionStatus';
import ProductList from './ProductList';

const data = [
  { id: 1, name: 'Signia Styletto X' },
  { id: 2, name: 'Signia Pure 312 Nx' },
  { id: 3, name: 'Signia Motion Charge&Go Nx' },
  { id: 4, name: 'TH Advanced 5' },
  { id: 5, name: 'TH Premium 19 Canal+' }
]

ReactDOM.render(
  <React.StrictMode>
    {/* <ProductList products={data} /> */}
    <ConnectionStatus />
  </React.StrictMode>,
  document.getElementById('root')
);
