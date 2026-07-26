// // Определение контракта (типа)
// type Product = {
//     id: number;
//     title: string;
//     price: number;
// };

// // Создание объекта
// const keyboard: Product = {
//     id: 1,
//     title: "Mechanical Keyboard",
//     price: 5000
// };

// // Ошибка: TS подсветит, что price должен быть числом
// // const mouse: Product = { id: 2, title: "Mouse", price: "1500" };

// function formatProduct(product: Product): string {
//     return `ID: ${product.id} | ${product.title} - ${product.price} руб.`;
// }

// console.log(formatProduct(keyboard));

// let test: number

// if(keyboard.price > 1000) {
//     test = 1000
// } else {
//     test = 500
// }

// console.log(test)

type Item = {
  id: number
  name: string
  price: number
}

const phone: Item = {
  id: 1,
  name: 'iPhone',
  price: -100000
}

function showItem(item: Item): string {
  if (item.price < 0 || item.id < 0) {
    throw new Error('Проблема с ценой или ID')
  }
  return `ID: ${item.id} | ${item.name} - ${item.price} руб.`
}

const result = showItem(phone)

console.log(result)
