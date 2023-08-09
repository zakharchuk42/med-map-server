import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common'
import { VisitsService } from './visits.service'
import { UserIdDecorator } from '../decorators/user-id.decorator'
import { CreateVisitDto } from './dto/create-visit.dto'
import { UpdateVisitDto } from './dto/update-visit.dto'
import { StatusEnum } from './entities/visit.entity'

@Controller('visits')
export class VisitsController {
	constructor(private readonly visitsService: VisitsService) {}

	@Get()
	getAll(@UserIdDecorator() id: number, @Query('status') status: StatusEnum) {
		return this.visitsService.getAll(id, status)
	}

	@Post()
	addVisit(@UserIdDecorator() userId: number, @Body() visit: CreateVisitDto) {
		return this.visitsService.addVisit(userId, visit)
	}

	@Delete()
	delete(
		@UserIdDecorator() userId: number,
		@Query('visitId') visitId: string,
	) {
		return this.visitsService.remove(userId, visitId)
	}

	@Put()
	edit(
		@UserIdDecorator() userId: number,
		@Query('visitId') visitId: string,
		@Body() visit: UpdateVisitDto,
	) {
		return this.visitsService.edit(userId, visit, visitId)
	}
}
