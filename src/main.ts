import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as express from 'express'
import { join } from 'path'
import * as process from "process";

async function bootstrap() {
	const app = await NestFactory.create(AppModule, { cors: false })
	app.enableCors({ credentials: true, origin: true })
	app.use('/uploads', express.static(join(__dirname, '..', '/uploads')))

	await app.listen(process.env.PORT, '0.0.0.0')
}

bootstrap()
