"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product = {
    id: 1,
    title: 'Smartphone',
    description: 'Latest model with advanced features',
    price: 599.99,
    costPrice: 399.99,
    status: 'published',
    category: 'electronics',
    imageUrl: 'https://example.com/smartphone.jpg',
    createdAt: new Date()
};
const productListItem = {
    id: product.id,
    title: product.title,
    price: product.price,
    status: product.status,
    imageUrl: product.imageUrl
};
const publicProduct = {
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.price,
    status: product.status,
    category: product.category,
    imageUrl: product.imageUrl,
    createdAt: product.createdAt
};
const createProductCommand = {
    title: 'Smartphone',
    description: 'Latest model with advanced features',
    price: 599.99,
    costPrice: 399.99,
    category: 'electronics',
    imageUrl: 'https://example.com/smartphone.jpg'
};
const updateProductCommand = {
    productId: 1,
    title: 'Updated Smartphone',
    price: 649.99
};
