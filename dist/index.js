"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatPayment(payment) {
    if (payment.method === 'card') {
        return `оплата картой ${payment.lastFourDigits}`;
    }
    else if (payment.method === 'cash') {
        return `оплата наличными ${payment.changeFrom} change`;
    }
    else {
        return `банковский перевод ${payment.companyInn}`;
    }
}
const payment = {
    method: 'cash',
    changeFrom: 5000
};
console.log(formatPayment(payment));
