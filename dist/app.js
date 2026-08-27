"use strict";
// import { addMoney, createMoney, type Money } from "./domain/money.js";
Object.defineProperty(exports, "__esModule", { value: true });
// import { type Product } from "./domain/product.js";
const lodash_1 = require("lodash");
const some_library_1 = require("some-library");
const index_js_1 = require("./index.js");
const keyboard = {
    id: 1,
    title: 'Клавиатура',
    price: (0, index_js_1.createMoney)(7500.456)
};
const delivery = (0, index_js_1.createMoney)(500.257);
const total = (0, index_js_1.addMoney)(keyboard.price, delivery);
console.log(keyboard);
console.log(total);
(0, lodash_1.chunk)(['a', 'b', 'c', 'd'], 2);
const result = (0, some_library_1.someFunction)('Hello');
console.log(result);
