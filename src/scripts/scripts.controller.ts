import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common'
import { ScriptsService } from './scripts.service'
import { CreateScriptDto } from './dto/create-script.dto'
import { UserIdDecorator } from '../decorators/user-id.decorator'
import { UpdateScriptDto } from './dto/update-script.dto'

@Controller('scripts')
export class ScriptsController {
	constructor(private readonly scriptsService: ScriptsService) {}

	@Get()
	getScript(
		@Query('scriptId') scriptId: string,
		@UserIdDecorator() userId: number,
	) {
		return this.scriptsService.getScript(scriptId, userId)
	}

	@Post()
	addScript(
		@Query('visitId') visitId: string,
		@Body() script: CreateScriptDto,
		@UserIdDecorator() userId: number,
	) {
		return this.scriptsService.addScript(+visitId, script, userId)
	}

	@Put()
	editScript(
		@Query('scriptId') scriptId: string,
		@Body() script: UpdateScriptDto,
		@UserIdDecorator() userId: number,
	) {
		return this.scriptsService.editScript(scriptId, script, userId)
	}

	@Delete()
	removeScript(
		@Query('scriptId') scriptId: string,
		@UserIdDecorator() userId: number,
	) {
		return this.scriptsService.removeScript(scriptId, userId)
	}
}
