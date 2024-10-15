import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './CartContext';

// Import Bootstrap CSS (add this line)
import 'bootstrap/dist/css/bootstrap.min.css';

// If you're using Bootstrap JS components, also add this line
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <App />
  </CartProvider>
);
