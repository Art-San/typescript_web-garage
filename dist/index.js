"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMoney = exports.createMoney = void 0;
var money_js_1 = require("./domain/money.js");
Object.defineProperty(exports, "createMoney", { enumerable: true, get: function () { return money_js_1.createMoney; } });
Object.defineProperty(exports, "addMoney", { enumerable: true, get: function () { return money_js_1.addMoney; } });
// export * from './domain/money.js'
// type TaskStatus = 'todo' | 'inProgress' | 'done'
// class TaskEntity {
//   private status: TaskStatus = 'todo'
//   constructor(
//     public readonly id: number,
//     private title: string
//   ) {
//     if (title.trim() === '') {
//       throw new Error('Название задачи обязательно')
//     }
//   }
//   rename(title: string): void {
//     if (title.trim() === '') {
//       throw new Error('Название задачи обязательно')
//     }
//     this.title = title.trim()
//   }
//   start(): void {
//     if (this.status !== 'todo') {
//       throw new Error('Начать можно только новую задачу')
//     }
//     this.status = 'inProgress'
//   }
//   complete(): void {
//     if (this.status !== 'inProgress') {
//       throw new Error('Завершить можно только активную задачу')
//     }
//     this.status = 'done'
//   }
//   toSnapshot(): {
//     id: number
//     title: string
//     status: TaskStatus
//   } {
//     return {
//       id: this.id,
//       title: this.title,
//       status: this.status
//     }
//   }
// }
