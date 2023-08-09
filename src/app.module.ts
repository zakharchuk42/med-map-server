import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from './users/entities/user.entity'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { FilesModule } from './files/files.module'
import { FileEntity } from './files/entities/file.entity'
import { VisitsModule } from './visits/visits.module'
import { ScriptsModule } from './scripts/scripts.module'
import { VisitEntity } from './visits/entities/visit.entity'
import { ScriptEntity } from './scripts/entities/script.entity'
import { DrugsModule } from './drugs/drugs.module'
import { DrugEntity } from './drugs/entities/drug.entity'

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: process.env.DB_HOST,
			port: Number(process.env.DB_PORT || 5432),
			username: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_NAME,
			entities: [
				UserEntity,
				FileEntity,
				VisitEntity,
				ScriptEntity,
				DrugEntity,
			],
			synchronize: true,
		}),
		UsersModule,
		AuthModule,
		FilesModule,
		VisitsModule,
		ScriptsModule,
		DrugsModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
