import React, { useEffect, useState } from 'react'

const useProducts = () => {
    let [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => setProducts(data.products));
    },[]);
    return [products, setProducts];
}

export default useProducts;