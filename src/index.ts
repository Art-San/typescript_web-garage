const users = [
  { name: 'Алексей', role: 'admin' },
  { name: 'Иван', role: 'user' },
  { name: 'Елена', role: 'admin' }
]

function groupBy<K extends PropertyKey, T extends Record<K, PropertyKey>>(
  items: T[],
  k: K
): Partial<Record<T[K], T[]>> {
  return items.reduce<Partial<Record<T[K], T[]>>>(
    (accumulator, currentValue) => {
      const key = currentValue[k]
      const group = (accumulator[key] ??= [])
      group.push(currentValue)

      return accumulator
    },
    {}
  )
}
// const grouped = groupBy(users, 'role')

const adminsOnly = [
  { name: 'Алексей', role: 'admin' },
  { name: 'Елена', role: 'admin' }
]

const grouped2 = groupBy(adminsOnly, 'role')
