type Theme = 'light' | 'dark' | 'system'
type Locale = 'ru' | 'en'
type FeatureName = 'newCheckout' | 'recommendations'

type AppConfig = {
  readonly apiUrl: string
  theme: Theme
  locale: Locale
  features: Record<FeatureName, boolean>
}

type ConfigOverrides = {
  theme?: Theme
  locale?: Locale
  features?: Partial<Record<FeatureName, boolean>>
}

function mergeConfig(base: AppConfig, overrides: ConfigOverrides): AppConfig {
  return {
    ...base,
    ...overrides,
    features: {
      ...base.features,
      ...overrides.features
    }
  }
}

const baseConfig: AppConfig = {
  apiUrl: 'https://api.example.com',
  theme: 'light',
  locale: 'ru',
  features: {
    newCheckout: false,
    recommendations: true
  }
}

const overrides: ConfigOverrides = {
  theme: 'dark',
  features: {
    newCheckout: true
  }
}

const mergedConfig = mergeConfig(baseConfig, overrides)
console.log(mergedConfig) //
// {
//   apiUrl: 'https://api.example.com',
//   theme: 'dark',
//   locale: 'ru',
//   features: {
//     newCheckout: true,
//     recommendations: true
//   }
// }
