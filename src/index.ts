type Customer = {
  name: string
  email: string
  phone?: string
}

type Payment =
  | { method: 'card'; lastFourDigits: string }
  | { method: 'cash'; changeFrom: number }
  | { method: 'bank-transfer'; companyInn: string }

function formatPayment(payment: Payment): string {
  if (payment.method === 'card') {
    return `оплата картой ${payment.lastFourDigits}`
  } else if (payment.method === 'cash') {
    return `оплата наличными ${payment.changeFrom}`
  } else {
    return `банковский перевод ${payment.companyInn}`
  }
}

const payment: Payment = {
  method: 'cash',
  changeFrom: 5000
}

console.log(formatPayment(payment))
