// const productPrice: number = 1000;
// const discountPercent: number = 10;

// function calculateDiscount(price: number, percent: number): number {
//   return price * (percent / 100);
// }

// const discountAmount: number = calculateDiscount(productPrice, discountPercent);

// console.log(discountAmount)

const userName: string = 'John'
const userTitle: string = 'Mr.'

function greet(name: string, title?: string): string {
  // Без проверки title будет "undefined" в строке
  if (title) {
    return `Hello, ${title} ${name}`
  }
  return `Hello, ${name}`
}

// console.log(greet(userName, userTitle)); // "Hello, Mr. John"
// console.log(greet(userName)); // "Hello, John"

// type Currency = "RUB" | "USD" | "EUR";

// const strictAmount: number = 1250;
// const strictCurrency: Currency = "EUR";

// function formatMoneyStrict(amount: number, currency: Currency = "RUB"): string {
//   return `${amount.toFixed(2)} ${currency}`;
// }

// const strictDefaultMoneyLabel: string = formatMoneyStrict(strictAmount);
// const strictMoneyLabel: string = formatMoneyStrict(
//   strictAmount,
//   strictCurrency,
// );

// console.log(strictDefaultMoneyLabel);
// console.log(strictMoneyLabel);

// const firstNumber: number = 10
// const secondNumber: number = 20
// const thirdNumber: number = 30

// function sum(...numbers: number[]): number {
//   return numbers.reduce((total, number) => total + number, 0)
// }

// const total: number = sum(firstNumber, secondNumber, thirdNumber)

// console.log(total)

// const rangeStart: number = 1
// const rangeEnd: number = 10
// const rangeStep: number = 2

// function createRange(
//   ...args: [start: number, end: number, step?: number]
// ): number[] {
//   const [start, end, step = 1] = args
//   const result: number[] = []

//   for (let current = start; current <= end; current += step) {
//     result.push(current)
//   }

//   return result
// }

// const range: number[] = createRange(rangeStart, rangeEnd, rangeStep)

// console.log(range)

// type PriceFormatter = (price: number) => string;

// const productPrice: number = 2500;

// const formatRubles: PriceFormatter = (price) => {
//   return `${price.toLocaleString("ru-RU")} ₽`;
// };

// const formattedPrice: string = formatRubles(productPrice);

// console.log(formattedPrice);

// type Formatter = {
//   (price: number): string;
//   locale: string;
// };

// const price: number = 2500;

// const formatter: Formatter = Object.assign((price: number) =>
//   price.toLocaleString(formatter.locale),
// );

// console.log(formatter(2500));

// formatter.locale = "en-US";

// const formattedValue: string = formatter(price);

// console.log(formattedValue);

// console.log(formatter.locale);

// type Product = {
//   id: number;
//   title: string;
//   price: number;
// };

// const products: Product[] = [
//   {
//     id: 1,
//     title: "Клавиатура",
//     price: 4500,
//   },
//   {
//     id: 2,
//     title: "Монитор",
//     price: 18_000,
//   },
//   {
//     id: 3,
//     title: "Ноутбук",
//     price: 85_000,
//   },
// ];

// const productTitles: string[] = products.map((product, index, array) => {
//   return product.price + ` товар номер ${index}`;
// });

// console.log(productTitles)

// function selectedProducts(
//   products: Product[],
//   predicate?: (product: Product) => boolean,
// ): Product[] {
//   if (!predicate) {
//     return products;
//   }
//   return products.filter(predicate);
// }

// const expensiveProducts: Product[] = selectedProducts(products, (product) => {
//   return product.price >= 10_000;
// });

// const expensiveProductsWithoutCall: Product[] = selectedProducts(products);

// console.log(expensiveProducts);
// console.log(expensiveProductsWithoutCall);

// type Formatter = {
//   (price: number): string;
//   locale: string;
// };

// const price: number = 2500;

// const formatter = ((price: number) =>
//   price.toLocaleString("ru-RU")) as Formatter;

// formatter.locale = "ru-RU";

// const formattedValue: string = formatter(price);

// console.log(formattedValue);
// console.log(formatter.locale);

// const users = [
//   { id: 1, name: "Alice", active: true },
//   { id: 2, name: "Bob", active: false },
//   { id: 3, name: "Charlie", active: true },
// ];

// function getValue(key: "id"): number[];
// function getValue(key: "name"): string[];
// function getValue(key: "active"): boolean[];

// function getValue(key: string): (string | number | boolean)[] {
//   return users.map((user) => user[key as keyof typeof user]);
// }

// const ids: number[] = getValue("id");
// const names: string[] = getValue("name");
// const actives: boolean[] = getValue("active");

// console.log("=== Коллекция пользователей ===");
// console.log("ID:", ids);
// console.log("Имена:", names);
// console.log("Активны:", actives);

// ============================================
// ГДЕ ПЕРЕГРУЗКИ ДЕЙСТВИТЕЛЬНО НУЖНЫ
// ============================================

// Представьте, что у нас есть API, который возвращает РАЗНЫЕ ТИПЫ
// в зависимости от того, что мы запрашиваем

// function fetchData(endpoint: "/users"): Promise<User[]>;
// function fetchData(endpoint: "/user/:id"): Promise<User>;
// function fetchData(endpoint: "/posts"): Promise<Post[]>;

// async function fetchData(endpoint: string): Promise<unknown> {
//   const response = await fetch(`https://api.example.com${endpoint}`);
//   return response.json();
// }

// // Теперь TypeScript знает ТОЧНЫЙ ТИП!
// const usersData = await fetchData("/users");     // Promise<User[]> ✅
// const userData = await fetchData("/user/1");     // Promise<User> ✅
// const postsData = await fetchData("/posts");     // Promise<Post[]> ✅

// ❌ БЕЗ ПЕРЕГРУЗОК было бы:
// const usersData = await fetchData("/users"); // Promise<unknown>
// (TypeScript не знает, что там внутри)

// type User = {
//   id: number;
//   name: string;
//   email: string;
// };

// type CreateUserInput = {
//   name: string;
//   email: string;
//   city: string;
//   company?: string;
// };

// function createUser(input: CreateUserInput): User {
//   console.log(input.city);
//   console.log(input.company);

//   return {
//     id: 1,
//     name: input.name,
//     email: input.email,
//   };
// }

// const user: User = createUser({
//   name: "Анна",
//   city: "Москва",
//   email: "anna@example.com",
// });

// console.log(user);

// type CreateUserInput = {
//     id: number;
//     name: string;
//     email: string;
//     city?: string;
// };

// function createUser(input: CreateUserInput) {
//     return { ...input, active: true };
// }

// // При вызове мы видим ключи, что исключает ошибки порядка
// createUser({ id: 1, name: 'Anna', email: 'anna@mail.com' });

// type Counter = {
//   value: number
//   increment(this: Counter, amount: number): void
// }

// const counter: Counter = {
//   value: 3,

//   increment(amount) {
//     this.value += amount
//   }
// }

// const increment = counter.increment

// increment.call(counter, 5)

// console.log(counter.value)

// ///////////////////////////////////

// function first<T>(items:T[]): T | undefined {
//   return items[0];
// }

// const firstNumber = first([10, 20, 30]);

// const firstName = first(["Анна", "Борис"]);

// console.log(firstNumber);
// console.log(firstName);

// type Product = {
//   id: number;
//   title: string;
//   price: number;
// };

// const products: Product[] = [
//   {
//     id: 1,
//     title: "Клавиатура",
//     price: 4500,
//   },
//   {
//     id: 2,
//     title: "Монитор",
//     price: 18000,
//   },
// ];

// function mapProduct<TInput, TOutput>(
//   items: TInput[],
//   transform: (product: TInput) => TOutput,
// ): TOutput[] {
//   return items.map(transform);
// }

// const prices = mapProduct(products, (product) => product.price);

// const titles = mapProduct(products, (product) => product.title);

// console.log(titles);
// console.log(prices);
