import { Body, Controller, Delete, Post, Query } from '@nestjs/common'
import { DrugsService } from './drugs.service'
import { CreateDrugDto } from './dto/create-drug.dto'

@Controller('drugs')
export class DrugsController {
	constructor(private readonly drugsService: DrugsService) {}

	@Post()
	addDrugs(
		@Query('scriptId') scriptId: string,
		@Body() drugs: CreateDrugDto,
	) {
		return this.drugsService.addDrugs(+scriptId, drugs)
	}

	@Delete()
	deleteDrugs(@Query('drugsId') drugsId: string) {
		return this.drugsService.removeDrugs(drugsId)
	}
}
