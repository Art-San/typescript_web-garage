"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDiscountedPrice = calculateDiscountedPrice;
function calculateDiscountedPrice(product, percent) {
    return product.price * (1 - percent / 100);
}
