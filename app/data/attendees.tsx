import { faker } from "@faker-js/faker"

faker.seed(123) //? Isso serve para não gerar dados diferentes no servidor e client, daria erro de hydratation
export const attendees = Array.from({ length: 53 }).map(() => {
  return {
    id: faker.number.int({ min: 10000, max: 20000 }),
    name: faker.person.fullName(),
    email: faker.internet.email().toLocaleLowerCase(),
    createdAt: faker.date.recent({ days: 30 }),
    checkedInAt: faker.date.recent({ days: 7 }),
  }
})
