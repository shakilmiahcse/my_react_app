// src/GreetingFunction.jsx
import React, {useState, useEffect} from 'react';


const GreetingFunction = () => { 
    
    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((data)=>{
            setProducts(data.products);
            console.log(data);
        }).catch((error)=>{
            console.error('Error:', error);
        });
    }, []);

    const [products,setProducts] = useState([]);
    
  return (
    <>
        {products.map((product)=> (
            <div key={product.id}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
            </div>
        ))}
    </>
  );
};

export default GreetingFunction;
