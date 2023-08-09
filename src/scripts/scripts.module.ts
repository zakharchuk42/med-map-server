import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ScriptEntity } from './entities/script.entity'
import { ScriptsController } from './scripts.controller'
import { ScriptsService } from './scripts.service'
import { FileEntity } from '../files/entities/file.entity'

@Module({
	controllers: [ScriptsController],
	providers: [ScriptsService],
	imports: [
		TypeOrmModule.forFeature([ScriptEntity]),
		TypeOrmModule.forFeature([FileEntity]),
	],
	exports: [ScriptsService],
})
export class ScriptsModule {}
