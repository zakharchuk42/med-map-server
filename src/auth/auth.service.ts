import { UsersService } from '../users/users.service'
import { ForbiddenException, Injectable } from '@nestjs/common'
import { CreateUserDto } from '../users/dto/create-user.dto'
import { UserEntity } from '../users/entities/user.entity'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
	constructor(
		private userService: UsersService,
		private jwtService: JwtService,
	) {}

	async validateUser(email: string, password: string): Promise<any> {
		const user = await this.userService.findByEmail(email)

		if (user && user.password === password) {
			const { password, ...result } = user
			return result
		}

		return null
	}

	async register(dto: CreateUserDto) {
		try {
			const userData = await this.userService.create(dto)

			return {
				token: this.jwtService.sign({ id: userData.id }),
			}
		} catch (err) {
			throw new ForbiddenException('Користувач з такою поштою вже є')
		}
	}

	async login(user: UserEntity) {
		return {
			token: this.jwtService.sign({ id: user.id }),
		}
	}
}
