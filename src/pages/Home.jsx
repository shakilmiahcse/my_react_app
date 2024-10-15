// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from DummyJSON API
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Our Products</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100">
              <img src={product.thumbnail} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description.substring(0, 100)}...</p>
                <p className="card-text"><strong>Price:</strong> ${product.price}</p>
                <p className="card-text"><strong>Rating:</strong> {product.rating} / 5</p>
                <a href={`/products/${product.id}`} className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
