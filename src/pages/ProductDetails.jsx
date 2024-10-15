// src/pages/ProductDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch product details based on the ID
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center">Product not found.</div>;
  }

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">{product.title}</h1>
      <div className="row">
        <div className="col-md-6">
          <img src={product.images[0]} alt={product.title} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h5>Description</h5>
          <p>{product.description}</p>
          <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>SKU:</strong> {product.sku}</p>
          <p><strong>Weight:</strong> {product.weight}g</p>
          <p><strong>Dimensions:</strong> {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm</p>
          <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
          <p><strong>Shipping Info:</strong> {product.shippingInformation}</p>
          <p><strong>Availability:</strong> {product.availabilityStatus}</p>
          <p><strong>Stock:</strong> {product.stock}</p>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>

      {/* Reviews Section */}
      <h5 className="mt-5">Customer Reviews</h5>
      {product.reviews.length > 0 ? (
        product.reviews.map((review, index) => (
          <div key={index} className="border p-3 my-2">
            <p><strong>{review.reviewerName} (Rating: {review.rating})</strong></p>
            <p>{review.comment}</p>
            <p className="text-muted">{new Date(review.date).toLocaleDateString()}</p>
          </div>
        ))
      ) : (
        <p>No reviews available for this product.</p>
      )}
      
      <p className="mt-4"><strong>Return Policy:</strong> {product.returnPolicy}</p>
    </div>
  );
};

export default ProductDetails;
