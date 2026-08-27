"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roundMoney = roundMoney;
function roundMoney(value) {
    return Math.round(value * 100) / 100;
}
