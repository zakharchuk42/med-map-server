import {
	Controller,
	Get,
	Put,
	UploadedFile,
	UseGuards,
	UseInterceptors,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { JWTAuthGuard } from '../auth/guards/jwt.guard'
import { UserIdDecorator } from '../decorators/user-id.decorator'
import { UpdateUserDto } from './dto/update-user.dto'
import { FileInterceptor } from '@nestjs/platform-express'
import { fileStorage } from '../files/storage'

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get('/me')
	@UseGuards(JWTAuthGuard)
	getMe(@UserIdDecorator() id: number) {
		return this.usersService.findById(id)
	}

	@Put('/update')
	@UseInterceptors(
		FileInterceptor('avatar', {
			storage: fileStorage,
		}),
	)
	editAvatar(
		@UserIdDecorator() id: number,
		@UploadedFile() avatar: UpdateUserDto['avatar'],
	) {
		return this.usersService.editAvatar(id, avatar)
	}
}
