// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc'); // Default sort order

  // Fetch products from DummyJSON API
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products); // Set initial filtered products
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  // Handle filtering
  const handleFilter = (category) => {
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  // Handle sorting
  const handleSort = (order) => {
    setSortOrder(order);
    const sorted = [...filteredProducts].sort((a, b) => {
      return order === 'asc' ? a.price - b.price : b.price - a.price;
    });
    setFilteredProducts(sorted);
  };

  return (
    <div className="container my-5">
      {/* Hero Section with Carousel */}
      <div id="carouselExampleIndicators" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>

          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://via.placeholder.com/800x300?text=Banner+1" className="d-block w-100" alt="Banner 1" />
          </div>
          <div className="carousel-item">
            <img src="https://via.placeholder.com/800x300?text=Banner+3" className="d-block w-100" alt="Banner 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h1 className="text-center mb-4">Our Products</h1>

      {/* Filter and Sort Options */}
      <div className="mb-4 d-flex justify-content-between">
        <div>
          <button className="btn btn-outline-primary me-2" onClick={() => handleFilter('all')}>All</button>
          <button className="btn btn-outline-primary me-2" onClick={() => handleFilter('beauty')}>Beauty</button>
          <button className="btn btn-outline-primary" onClick={() => handleFilter('electronics')}>Electronics</button>
        </div>
        <div>
          <select className="form-select" onChange={(e) => handleSort(e.target.value)} value={sortOrder}>
            <option value="asc">Sort by Price: Low to High</option>
            <option value="desc">Sort by Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Cards */}
      <div className="row">
        {filteredProducts.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm">
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
