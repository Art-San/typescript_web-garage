type Settings = {
  theme: 'light' | 'dark'
  retries: number
  notifications: boolean
}

type T5 = keyof {
  theme: 'light' | 'dark'
  retries: number
  notifications: boolean
}

type T6 = keyof Settings

type T7 = keyof { [key: string]: Settings }
