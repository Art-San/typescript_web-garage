"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMoney = createMoney;
exports.addMoney = addMoney;
exports.validateAmount = validateAmount;
const rounding_js_1 = require("../internal/rounding.js");
function createMoney(amount) {
    return {
        amount: (0, rounding_js_1.roundMoney)(amount),
        currency: 'RUB'
    };
}
function addMoney(left, right) {
    return {
        amount: (0, rounding_js_1.roundMoney)(left.amount + right.amount),
        currency: 'RUB'
    };
}
function validateAmount(amount) {
    return amount >= 0;
}
