type CatalogProduct = {
  sku: string
  price: number
  labels: string[]
}

type CartQuantity = {
  quantity: number
}

type CartItem = CatalogProduct & CartQuantity
