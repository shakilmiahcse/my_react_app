// src/GreetingFunction.jsx
import React, {useState, useEffect} from 'react';


const GreetingFunction = ({ name1 }) => { 
    const [name, setName] = useState(name1);
    
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
      <h2>Functional Component</h2>
      <p>Hello, {name}! This is a functional component.</p>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
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
