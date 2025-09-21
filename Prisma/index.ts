import { PrismaClient } from './generated/prisma/index.js'

const prisma = new PrismaClient()

async function main() {
	console.log('hello from prisma')
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
