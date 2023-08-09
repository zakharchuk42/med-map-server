import {
	Body,
	Controller,
	Delete,
	Get,
	MaxFileSizeValidator,
	ParseFilePipe,
	Post,
	Query,
	UploadedFiles,
	UseGuards,
	UseInterceptors,
} from '@nestjs/common'
import { FilesInterceptor } from '@nestjs/platform-express'
import { fileStorage } from './storage'
import { JWTAuthGuard } from '../auth/guards/jwt.guard'
import { UserIdDecorator } from '../decorators/user-id.decorator'
import { FilesService } from './file.service'
import { UpdateFileDto } from './dto/update-file.dto'

@Controller('files')
@UseGuards(JWTAuthGuard)
export class FilesController {
	constructor(private readonly filesService: FilesService) {}

	@Get()
	findAll(@UserIdDecorator() userId: number) {
		return this.filesService.findAll(userId)
	}

	@Post()
	@UseInterceptors(
		FilesInterceptor('files', 2, {
			storage: fileStorage,
		}),
	)
	create(
		@UploadedFiles(
			new ParseFilePipe({
				validators: [
					new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 3 }),
				],
			}),
		)
		files: Express.Multer.File[],
		@Query('scriptId') scriptId: string,
		@UserIdDecorator() userId: number,
	) {
		return this.filesService.create(files, userId, +scriptId)
	}

	@Delete()
	remove(@UserIdDecorator() userId: number, @Body() file: UpdateFileDto) {
		return this.filesService.remove(userId, file)
	}
}
