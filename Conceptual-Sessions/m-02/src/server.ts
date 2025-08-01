import mongoose from 'mongoose'
import config from './config'
import app from './app'

async function server() {
	try {
		await mongoose.connect(config.database_url as string)
		console.log('Database Connect Successfully')
		app.listen(config.port, () => {
			console.log(`App Listening On Port: ${config.port}`)
		})
	} catch (error) {
		console.log(`Found Error while Try To Run Server: ${error}`)
	}
}
server()
