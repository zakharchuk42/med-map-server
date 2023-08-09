import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { VisitEntity } from './entities/visit.entity'
import { VisitsController } from './visits.controller'
import { VisitsService } from './visits.service'
import { ScriptEntity } from '../scripts/entities/script.entity'
import { FileEntity } from '../files/entities/file.entity'

@Module({
	controllers: [VisitsController],
	providers: [VisitsService],
	imports: [
		TypeOrmModule.forFeature([VisitEntity]),
		TypeOrmModule.forFeature([ScriptEntity]),
		TypeOrmModule.forFeature([FileEntity]),
	],
	exports: [VisitsService],
})
export class VisitsModule {}
