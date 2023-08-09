import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { ScriptEntity } from './entities/script.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { CreateScriptDto } from './dto/create-script.dto'
import { UpdateScriptDto } from './dto/update-script.dto'
import { FileEntity } from '../files/entities/file.entity'
import * as fs from 'fs'

@Injectable()
export class ScriptsService {
	constructor(
		@InjectRepository(ScriptEntity)
		private repository: Repository<ScriptEntity>,
		@InjectRepository(FileEntity)
		private repositoryFile: Repository<FileEntity>,
	) {}

	getScript(scriptId: string, userId: number) {
		return this.repository
			.createQueryBuilder('script')
			.leftJoinAndSelect('script.drugs', 'drugs')
			.leftJoinAndSelect('script.files', 'files')
			.where('script.id = :scriptId', { scriptId })
			.andWhere('script.userId = :userId', { userId })
			.getOne()
	}

	async addScript(visitId: number, script: CreateScriptDto, userId) {
		await this.repository
			.createQueryBuilder('script')
			.insert()
			.values({
				...script,
				visit: { id: visitId },
				userId,
			})
			.execute()

		return {
			message: 'Рецепт додано',
		}
	}

	async editScript(
		scriptId: string,
		script: UpdateScriptDto,
		userId: number,
	) {
		await this.repository
			.createQueryBuilder('script')
			.update()
			.set({ ...script })
			.where('id = :scriptId', { scriptId })
			.andWhere('userId = :userId', { userId })
			.execute()

		return { message: 'Рецепт успішно відредаговано' }
	}

	async removeScript(scriptId: string, userId: number) {
		const files = await this.repositoryFile
			.createQueryBuilder('files')
			.where('files.scriptId = :scriptId', { scriptId })
			.getMany()

		files.forEach((file) => fs.rmSync(`uploads/${file.filename}`))

		await this.repository
			.createQueryBuilder('script')
			.delete()
			.where('userId = :userId', { userId })
			.andWhere('id = :scriptId', { scriptId })
			.execute()

		return { message: 'Рецепт було віидалено' }
	}
}
