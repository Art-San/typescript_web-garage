type Product = {
  id: number
  title: string
  price: number
}

const product: Product = {
  id: 1,
  title: 'Клавиатура',
  price: 7500
}

function formatProduct(product: Product): string {
  return `${product.title} (${product.price} руб.)`
}

console.log(formatProduct(product))
