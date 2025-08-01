import { Request, Response } from 'express'
import User from './user.model'

const createUser = async (req: Request, res: Response) => {
	const payload = req.body
	const user = new User(payload)
	const result = await user.save()
	res.send({
		success: true,
		message: 'user crated Successfully',
		data: result,
	})
}

export default {
	createUser,
}
