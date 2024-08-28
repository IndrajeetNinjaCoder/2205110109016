import React, { useState, useEffect } from 'react';
import data from '../api/data.json';
import ProductCard from './ProductCard';
import { Grid } from '@mui/material';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            // Simulate an async operation with a timeout
            setTimeout(() => {
                setProducts(data);
                setLoading(false);
            }, 500);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const style = {
        margin: "20px",
    };

    return (
        <div >
            <Grid container spacing={2} style={style}>
                {products.map(product => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default AllProducts;
