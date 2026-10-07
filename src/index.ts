// src/index.ts
// export type { Product } from './domain/products.js';
// export { createMoney, addMoney } from './domain/money.js';
// Внутреннюю функцию roundMoney мы отсюда НЕ экспортируем!

declare module 'old-calc' {
    export function add(a: number, b: number): number
}