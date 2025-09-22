import { PrismaClient } from './generated/prisma/index.js'

const prisma = new PrismaClient()

async function main() {
	// create data
	// const result = await prisma.user.create({
	// 	data: {
	// 		name: 'ismailjosim',
	// 		email: 'mdjasim.ph@gmail.com',
	// 	},
	// })
	// console.log(result)
	// const usersData = await prisma.user.findMany({
	// 	where: {
	// 		name: 'ismail',
	// 	},
	// })
	// const specificUser = await prisma.user.findUnique({
	// 	where: {
	// 		id: 1,
	// 	},
	// })
	// const specificUser = await prisma.user.findUniqueOrThrow({
	// 	where: {
	// 		id: 3,
	// 	},
	// })
	// console.log(specificUser)
	// update data
	// const result = await prisma.user.update({
	// 	where: {},
	// 	data: {},
	// })
	// const result = await prisma.user.update({
	// 	where: {
	// 		id: 1,
	// 	},
	// 	data: {
	// 		name: 'Md. Jasim',
	// 	},
	// })
	// console.log(result)
	// delete data
	// const result = await prisma.user.delete({
	// 	where: {
	// 		id: 1,
	// 	},
	// })
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (err) => {
		console.log(err)
		await prisma.$disconnect()
		process.exit(1)
	})
