import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const ProductCard = ({ product }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={product.image || 'https://st4.depositphotos.com/13324256/24475/i/450/depositphotos_244751462-stock-photo-top-view-product-lettering-made.jpg'}
                alt={product.name}
            />
            
            <CardContent>
                <Typography variant="h6" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Company: {product.company}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Price: ${product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Rating: {product.rating} ★
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Discount: {product.discount}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Availability: {product.availability ? 'In Stock' : 'Out of Stock'}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
