import express, { Application, Response } from 'express'
import cors from 'cors'

const app: Application = express()

// middleware functions
app.use(express.json())
app.use(cors())

app.get('/', (_, res: Response) => {
	res.send({
		status: true,
		message: 'Mango Server Default Route',
	})
})

export default app
