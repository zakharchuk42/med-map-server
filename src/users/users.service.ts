import { CreateUserDto } from './dto/create-user.dto'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from './entities/user.entity'
import { Repository } from 'typeorm'
import { UpdateUserDto } from './dto/update-user.dto'
import * as fs from 'fs'

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(UserEntity)
		private repository: Repository<UserEntity>,
	) {}

	async findByEmail(email: string) {
		return this.repository.findOneBy({
			email,
		})
	}

	async findById(id: number) {
		return this.repository.findOneBy({
			id,
		})
	}

	create(dto: CreateUserDto) {
		return this.repository.save(dto)
	}

	async editAvatar(id, avatar: UpdateUserDto['avatar']) {
		const user = await this.repository.findOneBy({
			id,
		})

		if (user.avatar.length > 0) {
			fs.rmSync(`uploads/${user.avatar}`)
		}

		const newAvatar = avatar?.filename ? avatar.filename : ''
		await this.repository.save({ ...user, avatar: newAvatar })

		return { message: 'Аватар успішно змінено' }
	}
}
