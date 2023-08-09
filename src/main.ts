import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as express from 'express'
import { join } from 'path'

async function bootstrap() {
	const app = await NestFactory.create(AppModule, { cors: false })
	app.enableCors({ credentials: true, origin: true })
	app.use('/uploads', express.static(join(__dirname, '..', '/uploads')))

	await app.listen(4000)
}

bootstrap()
