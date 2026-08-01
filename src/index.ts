// type Product = {
//   id: number
//   title: string
//   price: number
// }

// function parseJson(text: string): unknown {
//   return JSON.parse(text)
// }

// function isRecord(value: unknown): value is Record<string, unknown> {
//   return typeof value === 'object' && value !== null
// }

// function isProduct(value: unknown): value is Product {
//   if (!isRecord(value)) {
//     return false
//   }

//   return (
//     typeof value.id === 'number' &&
//     typeof value.title === 'string' &&
//     typeof value.price === 'number'
//   )
// }

// const rawProduct = parseJson('{"id": 1, "title": "клавиатура", "price": 42}')

// if (isProduct(rawProduct)) {
//   console.log('id', rawProduct.id)
//   console.log('title', rawProduct.title)
//   console.log('price', rawProduct.price)
// } else {
//   console.log('rawProduct не является Product')
// }

// Тип возврата и void

// function greet(name: string): string {
//   return `привет. ${name}`
// }
// const greetResult = greet('John') // greetResult имеет тип string
// console.log(greetResult)

// function getAge(age: number): number {
//   return age
// }
// const ageResult = getAge(20)

// function isActive(): boolean {
//   return true
// }

// function getIds(): number[] {
//   return [1, 2, 3]
// }
// const ids = getIds()

// function getUser(): { id: number; name: string } {
//   return { id: 1, name: 'John' }
// }

// function logMessage(message: string): void {
//   console.log(message)
// }

// const logMessageResult = logMessage('Hello') // logMessageResult имеет тип void // undefined

// console.log(logMessageResult)

type NumberAction = (value: number) => void

function runAction(value: number, action: NumberAction): void {
  action(value)
}

runAction(10, (value) => {
  console.log(value * 2)
})

// never

// type PaymentStatus = 'success' | 'failed' | 'pending'

// function assertNever(value: never): never {
//   throw new Error('Unexpected object: ' + `${String(value)}`)
// }

// function statusLabel(status: PaymentStatus): string {
//   switch (status) {
//     case 'success':
//       return 'Успешно'
//     case 'failed':
//       return 'Ошибка'
//     case 'pending':
//       return 'В процессе'
//     default:
//       return assertNever(status)
//   }
// }

// console.log(statusLabel('success'))

// as (Утверждение типов)

// const inputElement = document.querySelector('input') as HTMLInputElement
// inputElement.value = 'Hello'

// function getValue(flag: boolean): string | number {
//   return flag ? 'string' : 10
// }

// const result = getValue(true) as string
// console.log(result.toUpperCase())

// type Product = {
//   id: number
//   title: string
//   price: number
// }

// const value = JSON.parse('{"id": 1, "title": "Product", "price": 100}')
// const product = value as Product
// console.log(product.price)

//  as const (Const Assertions)

// const routes = {
//   home: '/',
//   about: '/about',
//   contact: '/contact'
// } as const

// // routes.home = '/home' // не получится так сделать

// const homeRoute = routes.home
// console.log(homeRoute)

// const rgb = [245, 45, 15] as const

// rgb[0] = 10
// rgb.push(10)

// // satisfies

// type config = {
//   name: string
//   age: number
// }

// const config = {
//   name: 'John',
//   age: 30,
//   role: 'admin' // ошибка так как нет в типе
// } satisfies config

// config.name = 'Jane'
// config.age = 25
// config.role = 'user'

// console.log(typeof null === 'object')

// type PaymentStatus = 'success' | 'failed' | 'pending' | 'refunded'

// function assertNever(value: never): never {
//   throw new Error('Unexpected object: ' + `${String(value)}`)
// }

// function statusLabel(status: PaymentStatus): string {
//   switch (status) {
//     case 'success':
//       return 'Успешно'
//     case 'failed':
//       return 'Ошибка'
//     case 'pending':
//       return 'В процессе'
//     default:
//       return assertNever(status)
//   }
// }

// console.log(statusLabel('success'))

// function parseJson(text: string): unknown {
//   return JSON.parse(text)
// }

// const payload = parseJson('{"title": "hello", "price": 42}')

// if (typeof payload === 'object' && payload !== null) {
//   if ('title' in payload) {
//     console.log(payload.title)
//   }
// }

type Config = {
  name: string
  age: number
  role: 'admin' | 'user'
}

const config: Config = {
  name: 'John',
  age: 30,
  role: 'admin' // ошибка так как нет в типе
}

config.name = 'Jane'
config.age = 25
config.role = 'user' // ошибка так как нет в типе используй анатацию если роль может быть только admin или user
