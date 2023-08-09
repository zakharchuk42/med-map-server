import { Module } from '@nestjs/common'
import { DrugsController } from './drugs.controller'
import { DrugsService } from './drugs.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DrugEntity } from './entities/drug.entity'

@Module({
	controllers: [DrugsController],
	providers: [DrugsService],
	imports: [TypeOrmModule.forFeature([DrugEntity])],
	exports: [DrugsService],
})
export class DrugsModule {}
