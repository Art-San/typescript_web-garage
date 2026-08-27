type ProductStatus = 'draft' | 'published' | 'archived'
type ProductCategory = 'electronics' | 'clothing' | 'books'
type Product = {
  readonly id: number
  title: string
  description: string
  price: number
  costPrice: number
  status: ProductStatus
  category: ProductCategory
  imageUrl?: string
  readonly createdAt: Date
}

const product: Product = {
  id: 1,
  title: 'Smartphone',
  description: 'Latest model with advanced features',
  price: 599.99,
  costPrice: 399.99,
  status: 'published',
  category: 'electronics',
  imageUrl: 'https://example.com/smartphone.jpg',
  createdAt: new Date()
}

type ProductListItem = Pick<
  Product,
  'id' | 'title' | 'price' | 'status' | 'imageUrl'
>

const productListItem: ProductListItem = {
  id: product.id,
  title: product.title,
  price: product.price,
  status: product.status,
  imageUrl: product.imageUrl
}

type PublicProduct = Omit<Product, 'costPrice'>

const publicProduct: PublicProduct = {
  id: product.id,
  title: product.title,
  description: product.description,
  price: product.price,
  status: product.status,
  category: product.category,
  imageUrl: product.imageUrl,
  createdAt: product.createdAt
}

type CreateProductCommand = Omit<Product, 'id' | 'createdAt' | 'status'>

const createProductCommand: CreateProductCommand = {
  title: 'Smartphone',
  description: 'Latest model with advanced features',
  price: 599.99,
  costPrice: 399.99,
  category: 'electronics',
  imageUrl: 'https://example.com/smartphone.jpg'
}

type EditableProductFields = Pick<
  Product,
  'title' | 'description' | 'price' | 'category' | 'imageUrl'
>

type ProductUpdatePatch = Partial<EditableProductFields>

type UpdateProductCommand = {
  productId: Product['id']
} & ProductUpdatePatch

const updateProductCommand: UpdateProductCommand = {
  productId: 1,
  title: 'Updated Smartphone',
  price: 649.99
}
