type PostDto = {
  userId: number
  id: number
  title: string
  body: string
}

class ApiError extends Error {
  constructor(
    public status: number,
    public details?: unknown,
    message?: string
  ) {
    super(message)
    this.name = 'ApiError'
    // Для корректного наследования в старых средах:
    Object.setPrototypeOf(this, ApiError.prototype)
  }
}

async function request<T>(url: string): Promise<T> {
  const response = await fetch(url)

  if (!response.ok) {
    throw new ApiError(response.status)
  }

  return (await response.json()) as T
}

const post = request<PostDto>('https://jsonplaceholder.typicode.com/posts/1')

console.log(post)
post.then((data) => console.log(data))
