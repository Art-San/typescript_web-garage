// type Identified = {
//   id: number;
// };

// type Timestamped = {
//   createdAt: Date;
//   updatedAt: Date;
// };

// type Article =  Identified &
//   Timestamped & {
//     title: string;
//   };

// type Article1 = {
//   id: number;
//   createdAt: Date;
//   updatedAt: Date;
//   title: string;
// };

// const article: Article = {
//   id: 1,
//   createdAt: new Date(),
//   updatedAt: new Date(),
//   title: "Объектные типы в TypeScript",
// };

// // type Product = Identified &
// //   Timestamped &
// //   SoftDeleted &
// //   Publishable &
// //   Searchable &
// //   Trackable & {
// //     title: string;
// //     price: number;
// //   };

// type NumericId = { id: number };
// type StringId = { id: string };
// type Impossible = NumericId & StringId;

// function printImpossible(value: Impossible): void {
//   console.log(value.id);
// }

// const value: Impossible = {
//   id: 1, // Ошибка: Type 'number' is not assignable to type 'never'
// };

type ApiUser = {
  id: string
  name: string
}

type DbRecord = {
  id: number
  createdAt: Date
}

// type UserRecord = ApiUser & DbRecord;

type UserRecord = {
  apiId: string
  databaseId: number
  name: string
  createdAt: Date
}

// type Customer = {

//   readonly id: number
//   readonly createdAt: Date
//   name: string
//   email: string
// }

// type UpdateCustomerCommand = {
//   id: number
//   name?: string
//   email?: string
// }

// function updateCustomer(
//   customer: Customer,
//   command: UpdateCustomerCommand
// ): Customer {
//   if (customer.id !== command.id) {
//     throw new Error('Команда относится к другому клиенту')
//   }

//   return {
//     ...customer,
//     name: command.name ?? customer.name,
//     email: command.email ?? customer.email
//   }
// }

// const customer: Customer = {
//   id: 1,
//   createdAt: new Date(),
//   name: 'Анна',
//   email: 'anna@example.com'
// }

// const command: UpdateCustomerCommand = {
//   id: 2,
//   name: 'Анна Петрова'
// }

// updateCustomer(customer, {
//   id: 1,
//   name: 'Анна Петрова'
// })

// updateCustomer(customer, {
//   id: 1,
//   email: 'anna.petrova@example.com'
// })

//type UpdateCustomerCommand = Partial<Customer>;

// const renameCustomerCommand: UpdateCustomerCommand = {
//   id: 1,
//   name: "Анна Петрова",
// };

// const changeEmailCommand: UpdateCustomerCommand = {
//   id: 1,
//   email: "anna.petrova@example.com",
// };

// const updateCustomerCommand: UpdateCustomerCommand = {
//   id: 1,
//   name: "Анна Петрова",
//   email: "anna.petrova@example.com",
// };

////////////////////////////////////
// type Address = {
//   country: string
//   city: string
//   street: string
//   building: string
//   postalCode?: string
// }

// type Customer = {
//   readonly id: number
//   name: string
//   contacts: {
//     email: string
//     phone?: string
//   }
//   addresses: readonly Address[]
// }

// const customer: Customer = {
//   id: 1,
//   name: 'Анна Смирнова',
//   contacts: {
//     email: 'anna@example.com'
//   },
//   addresses: [
//     {
//       country: 'Россия',
//       city: 'Москва',
//       street: 'Тверская',
//       building: '15'
//     }
//   ]
// }

// if (customer.addresses[0]) {
//   customer.addresses[0].city = 'Санкт-Петербург'
// }

// customer.addresses.push({
//   country: "Россия",
//   city: "Москва",
//   street: "Тверская",
//   building: "1",
// });

// function formatAddress(address: Address): string {
//   return [address.country, address.city, address.street, address.building].join(
//     ', '
//   )
// }

////////////////////////////////////

// type CreateUserInput = {
//   name: string;
//   email: string;
// };

// function createUser(input: CreateUserInput): void {
//   console.log(input);
// }

// const checkedInput = {
//   name: "Анна",
//   email: "anna@example.com",
// } satisfies CreateUserInput;

// const input: CreateUserInput = {
//   name: "Анна",
//   email: "anna@example.com",
// };

// type ButtonConfig = {
//   variant: "primary" | "secondary";
//   label: string;
// };

// const button = {
//   variant: "primary",
//   label: "Сохранить",
// } satisfies ButtonConfig;

// createUser({
//   name: "Анна",
//   email: "anna@example.com",
//   role: "admin", // Ошибка: свойство "role" не существует в типе "CreateUserInput"
// });

// const adminInput = {
//   name: "Анна",
//   email: "anna@example.com",
//   role: "admin",
// };

// createUser(adminInput);
