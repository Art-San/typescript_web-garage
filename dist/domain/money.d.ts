export type Money = {
    amount: number;
    currency: 'RUB';
};
export declare function createMoney(amount: number): Money;
export declare function addMoney(left: Money, right: Money): Money;
export declare function validateAmount(amount: number): boolean;
//# sourceMappingURL=money.d.ts.map