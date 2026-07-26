"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product = {
    id: 1,
    title: 'Клавиатура',
    price: 7500
};
function formatProduct(product) {
    return `${product.title} (${product.price} руб.)`;
}
console.log(formatProduct(product));
