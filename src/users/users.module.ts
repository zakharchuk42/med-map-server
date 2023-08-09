import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from './entities/user.entity'
import { Module } from '@nestjs/common'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'

@Module({
	controllers: [UsersController],
	providers: [UsersService],
	imports: [TypeOrmModule.forFeature([UserEntity])],
	exports: [UsersService],
})
export class UsersModule {}
