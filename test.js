const users = [
  { name: 'Алексей', role: 'admin' },
  { name: 'Иван', role: 'user' },
  { name: 'Елена', role: 'admin' }
]

function groupBy(arr, k) {
  return arr.reduce((accumulator, currentValue) => {
    console.log('222', currentValue[k])

    const key = currentValue[k]
    const group = (accumulator[key] ??= [])
    group.push(currentValue)

    return accumulator
  }, {})
}

const grouped = groupBy(users, 'role')

console.log(23, grouped)
// Результат:
// {
//   admin: [{ name: "Алексей", role: "admin" }, { name: "Елена", role: "admin" }],
//   user: [{ name: "Иван", role: "user" }]
// }
