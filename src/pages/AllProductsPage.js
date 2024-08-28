import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filters from '../components/Filters';
import ProductList from '../components/ProductList';

const AllProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({
        category: '',
        minPrice: '',
        maxPrice: '',
        sortBy: 'price',
        sortOrder: 'asc'
    });

    const api = "http://20.244.56.144/test/companies";


    // const fetchProducts = async () => {
    //     const response = await axios.get(`${api}/categories/all/products`, {
    //         params: {
    //             ...filters,
    //             n: 10,
    //             page: 1
    //         }
    //     });
    //     setProducts(response.data.products);
    // };

    const fetchProducts = async () => {
        const url = 'http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000';
    
        try {
            const response = await axios.get(url, {
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzI0ODI3ODA4LCJpYXQiOjE3MjQ4Mjc1MDgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImRlY2ZmM2RhLTI3NDYtNDM4NS05NDFlLThmZGRjYmFlMTNmMCIsInN1YiI6IjIwMDNpbmRyYWplZXRAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiQWZmb3JkbWVkIiwiY2xpZW50SUQiOiJkZWNmZjNkYS0yNzQ2LTQzODUtOTQxZS04ZmRkY2JhZTEzZjAiLCJjbGllbnRTZWNyZXQiOiJFckxWa1NhckplYUxmelB2Iiwib3duZXJOYW1lIjoiSW5kcmFqZWV0Iiwib3duZXJFbWFpbCI6IjIwMDNpbmRyYWplZXRAZ21haWwuY29tIiwicm9sbE5vIjoiMjIwNTExMDEwOTAxNiJ9.y60CpkPb1CbXZBGLyj6t2obmGmxHv4ylQ-jRs3dWA-E',
                    'Content-Type': 'application/json'
                }
            });
    
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    
    fetchProducts();


    useEffect(() => {
        fetchProducts();
    }, [filters]);

    return (
        <div>
            <Filters filters={filters} setFilters={setFilters} applyFilters={fetchProducts} />
            <ProductList products={products} />
        </div>
    );
};

export default AllProductsPage;
