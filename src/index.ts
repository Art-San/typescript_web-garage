// type Named = {
//   name: string
// }

// type Employee = {
//   id: number
//   name: string
//   department: string
// }

// const employee = {
//   id: 10,
//   name: 'Анна',
//   department: 'Разработка'
// }

// function printName(value: Named): void {
//   console.log(value.name)
// }

// printName(employee)

// const named: Named = employee
// console.log(named.id) // Свойство "id" не существует в типе "Named"

// const namedOnly: Named = {
//   name: 'Анна'
// }

// const employee2: Employee = namedOnly // Свойство "id" отсутствует в типе "Named", но обязательно в типе "Employee"

// type TranslationKey = "save" | "cancel" | "delete";

// const exactTranslations: Record<TranslationKey, string> = {
//   save: "Сохранить",
//   cancel: "Отмена",
//   delete: "Удалить",
// };

// type StringDictionary = {
//   [translationCode: string]: string;
// };

// const translations: StringDictionary = {
//   save: "Сохранить",
//   cancel: "Отмена",
//   close: "Закрыть",
// };

// type UserNamesById = {
//   [id: string]: string;
// };

// const users: UserNamesById = {
//   "1": "Анна",
//   "2": "Борис",
// };

// type BrokenDictionary = {
//   [key: string]: string | number;

//   version: number;
// };

// const dictionary: BrokenDictionary = {
//   save: "Сохранить",
//   cancel: "Отмена",
//   close: "Закрыть",
//   version: 2,
// };

// const value = dictionary.save;

// type Cart = {
//   items: string[]
//   add(item: string): void
//   remove(item: string): boolean
// }

// type Cart = {
//   items: string[]
//   add(item: string): void // для данного примера этот вариант больше подходит
//   remove: (item: string) => boolean
// }

// const cart: Cart = {
//   items: [],

//   add(item) {
//     this.items.push(item)
//   },

//   remove(item) {
//     const index = this.items.indexOf(item)

//     if (index === -1) {
//       return false
//     }

//     this.items.splice(index, 1)
//     return true
//   }
// }

// cart.add('Книга')
// const removed = cart.remove('Книга')
// const removedAgain = cart.remove('Книга')

// console.log(removed)
// console.log(removedAgain)

// onClick: (event: MouseEvent) => void;

// type ButtonProps = {
//   label: string;
//   onClick: () => void;
// };

// type Cart = {
//   items: string[];
//   add(item: string): void;
//   remove(item: string): boolean;
// };

// type User = {
//   readonly id: number
//   name: string
//   readonly createdAt: Date
// }

// const user: User = {
//   id: 1,
//   name: 'Анна',
//   createdAt: new Date()
// }

// user.name = 'Анна Петровна'

// user.id = 2 // Ошибка: Cannot assign to 'id' because it is a read-only property.

// console.log(user.id)

// type Team = {
//   readonly members: readonly string[]
// }

// const team: Team = {
//   members: ['Анна']
// }

// team.members = ['Борис'] // меняется ссылка на массив

// team.members.push('Иван') // теперь

// console.log(team)

// type UserProfile = {
//   id: number
//   name: string
//   avatarUrl?: string
// }

// const user: UserProfile = {
//   id: 1,
//   name: 'Анна'
// }

// function getAvatar(profile: UserProfile): string {
//   return profile.avatarUrl ?? '/images/default-avatar.png'
// }

// console.log(
//   getAvatar({
//     id: 1,
//     name: 'Анна',
//     avatarUrl: '/avatars/ivan.png'
//   })
// )

// type OptionalAvatar = {
//   avatarUrl?: string
// }

// type ExplicitAvatar = {
//   avatarUrl: string | undefined
// }

// const first: OptionalAvatar = {}

// const second: ExplicitAvatar = {
//   avatarUrl: undefined
// }
