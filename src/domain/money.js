import { roundMoney } from '../internal/rounding.js';
export function createMoney(amount) {
    return {
        amount: roundMoney(amount),
        currency: 'RUB'
    };
}
export function addMoney(left, right) {
    return {
        amount: roundMoney(left.amount + right.amount),
        currency: 'RUB'
    };
}
export function validateAmount(amount) {
    return amount >= 0;
}
