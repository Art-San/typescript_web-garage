// enum UserRole {
//   Admin = "admin",
//   Editor = "editor",
//   Viewer = "viewer",
// }

// type UserRole = "admin" | "editor" | "viewer";

// function canDelete(role: UserRole): boolean {
//   return role === "admin";
// }

// console.log(canDelete("admin"));
// console.log(canDelete("editor"));

// const role1: UserRole = "admin";
// const role2: UserRole = "editor";

const UserRole = {
  Admin: 'admin',
  Editor: 'editor',
  Viewer: 'viewer'
} as const

type UserRole = (typeof UserRole)[keyof typeof UserRole]

function canEdit(role: UserRole): boolean {
  return role === UserRole.Admin || role === UserRole.Editor
}

console.log(canEdit(UserRole.Admin))
console.log(canEdit(UserRole.Viewer))

// enum Direction {
//   Up = "UP",
//   Down = "DOWN",
// }

// const enum DirectionConst {
//   Up = "UP",
//   Down = "DOWN",
// }

// console.log("Обычный enum:", Direction);

// console.log("Значение:", Direction.Up);

// console.log("const enum:", DirectionConst);

// console.log("Значение const enum:", DirectionConst.Up);

// enum OrderStatus {
//   Draft = 0,
//   Paid = 1,
//   Shipped = 2
// }

// enum UserRole {
//   Admin = 'admin',
//   Editor = 'editor',
//   Viewer = 'viewer'
// }

// // const role = UserRole.Admin;

// // console.log(role);

// function canDelete(role: UserRole): boolean {
//   return role === UserRole.Admin
// }

// console.log(canDelete(UserRole.Admin))
// console.log(canDelete(UserRole.Editor))

// enum OrderStatus {
//   Draft = 0,
//   Paid = 1,
//   Shipped = 2
// }

// const status = OrderStatus.Shipped

// console.log(status)

// enum HttpStatus {
//   Ok = 200,
//   NotFound = 404,
//   ServerError = 500,
// }

// let status;

// if (status === 200) {
//   console.log("Запрос выполнен успешно");
// }

// if (status === 404) {
//   console.log("Страница не найдена");
// }

// if (status === 500) {
//   console.log("Внутренняя ошибка сервера");
// }

// if (status === HttpStatus.Ok) {
//   console.log("Запрос выполнен успешно");
// }

// if (status === HttpStatus.NotFound) {
//   console.log("Страница не найдена");
// }

// if (status === HttpStatus.ServerError) {
//   console.log("Внутренняя ошибка сервера");
// }

// console.log(HttpStatus)

// interface PriceFormatter {
//   format(price: number): string;
// }

// class RubleFormatter implements PriceFormatter {
//   format(price: number): string {
//     return `${price.toLocaleString("ru-RU")} ₽`;
//   }
// }

// const formatter = new RubleFormatter();

// console.log(formatter.format(2500));

// type Logger = {
//   log(message: string): void;
// };

// class ConsoleLogger implements Logger {
//   log(message: string): void {
//     console.log(message);
//   }
// }

// interface WindowSettings {
//   theme: "light" | "dark";
// }

// interface WindowSettings {
//   locale: "ru" | "en";
// }

// interface WindowSettings {
//   theme: "light" | "dark";
//   locale: "ru" | "en";
// }

// const settings: WindowSettings = {
//   theme: "dark",
//   locale: "ru",
// };

// console.log(settings);

// window.appVersion = "1.0.0";

// declare global {
//   interface Window {
//     appVersion: string;
//   }
// }

// export {};

// interface Product {
//   id: number;
//   title: string;
//   price: number;
// }

// interface Entity {
//   id: number;
// }

// interface Product extends Entity {
//   title: string;
//   price: number;
// }

// interface DigitalProduct extends Product {
//   downloadUrl: string;
//   fileSize: number;
// }

// interface Named {
//   name: string;
// }

// interface Broken extends Named { // ошибка
//   name: number;
// }

// type WithSlug = {
//   slug: string;
// };

// interface Category extends WithSlug {
//   title: string;
// }

// type User = {
//   id: number;
//   name: string;
// };

// type Id = string | number;

// type Status = "draft" | "published";

// type Coordinates = [number, number];

// type Handler = (message: string) => void;

// type Identified = {
//   id: number;
// };

// type Timestamped = {
//   createdAt: Date;
//   updatedAt: Date;
// };

// type Article = Identified &
//   Timestamped & {
//     title: string;
//     status: "draft" | "published";
//   };

// type Article = {
//   id: number;
//   createdAt: Date;
//   updatedAt: Date;
//   title: string;
//   status: "draft" | "published";
// };

// interface User {
//   readonly id: number
//   name?: string
// }

// const user: User = {
//   id: 1,
//   name: 'Анна'
// }

// function printUser(user: User): void {
//   console.log(`${user.id}: ${user.name}`)
// }

// printUser(user)
