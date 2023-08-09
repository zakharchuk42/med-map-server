import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FileEntity } from './entities/file.entity'
import { Repository } from 'typeorm'
import * as fs from 'fs'
import { UpdateFileDto } from './dto/update-file.dto'

@Injectable()
export class FilesService {
	constructor(
		@InjectRepository(FileEntity)
		private repository: Repository<FileEntity>,
	) {}

	async findAll(userId: number) {
		const withScript = await this.repository
			.createQueryBuilder('files')
			.leftJoinAndSelect('files.script', 'script')
			.where('files.userId = :userId', { userId })
			.andWhere('files.scriptId is not null')
			.getMany()

		const withoutScript = await this.repository
			.createQueryBuilder('files')
			.leftJoinAndSelect('files.script', 'script')
			.where('files.userId = :userId', { userId })
			.andWhere('files.scriptId is null')
			.getMany()

		return { withScript, withoutScript }
	}

	async create(
		files: Express.Multer.File[],
		userId: number,
		scriptId: number,
	) {
		await files.forEach((file) => {
			const originalName = Buffer.from(
				file.originalname,
				'latin1',
			).toString('utf8')
			const script = !scriptId ? null : scriptId
			this.repository
				.createQueryBuilder('files')
				.insert()
				.values({
					...file,
					originalName: originalName,
					script: { id: script },
					user: { id: userId },
				})
				.execute()
		})

		return { message: 'Файли успішно завантажені' }
	}

	async remove(userId: number, file: UpdateFileDto) {
		await this.repository
			.createQueryBuilder('files')
			.delete()
			.where('userId = :userId', { userId })
			.andWhere('id = :id', { id: file.id })
			.execute()

		fs.rmSync(`uploads/${file.filename}`)

		return { message: 'Файл успішно видалено' }
	}
}
