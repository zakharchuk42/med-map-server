import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { StatusEnum, VisitEntity } from './entities/visit.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { CreateVisitDto } from './dto/create-visit.dto'
import { UpdateVisitDto } from './dto/update-visit.dto'
import { ScriptEntity } from '../scripts/entities/script.entity'
import * as fs from 'fs'
import { FileEntity } from '../files/entities/file.entity'

@Injectable()
export class VisitsService {
	constructor(
		@InjectRepository(VisitEntity)
		private repository: Repository<VisitEntity>,
		@InjectRepository(ScriptEntity)
		private repositoryScript: Repository<ScriptEntity>,
		@InjectRepository(FileEntity)
		private repositoryFile: Repository<FileEntity>,
	) {}

	getAll(userId: number, visitStatus: StatusEnum) {
		if (visitStatus) {
			return this.repository
				.createQueryBuilder('visits')
				.leftJoinAndSelect('visits.script', 'scripts')
				.where('visits.userId = :userId', { userId })
				.andWhere('visits.status = :visitStatus', { visitStatus })
				.orderBy({
					date: 'DESC',
				})
				.getMany()
		}

		return this.repository
			.createQueryBuilder('visit')
			.leftJoinAndSelect('visit.script', 'scripts')
			.where('visit.userId = :userId', { userId })
			.orderBy({
				date: 'DESC',
			})
			.getMany()
	}

	async addVisit(userId: number, visit: CreateVisitDto) {
		await this.repository
			.createQueryBuilder('visit')
			.insert()
			.values({
				...visit,
				user: { id: userId },
			})
			.execute()

		return { message: 'Візит добавлено' }
	}

	async remove(userId: number, visitId: string) {
		const script = await this.repositoryScript
			.createQueryBuilder('script')
			.where('script.visitId = :visitId', { visitId })
			.getOne()

		if (script !== null) {
			const files = await this.repositoryFile
				.createQueryBuilder('files')
				.where('files.scriptId = :id', { id: script.id })
				.getMany()

			files.length &&
				files.forEach((file) => fs.rmSync(`uploads/${file.filename}`))
		}

		await this.repository
			.createQueryBuilder('visit')
			.delete()
			.where('id = :visitId', { visitId })
			.andWhere('userId = :userId', { userId })
			.execute()

		return { message: 'Візит видалено' }
	}

	async edit(userId: number, visit: UpdateVisitDto, visitId: string) {
		await this.repository
			.createQueryBuilder('visit')
			.update()
			.set({ ...visit })
			.where('id = :visitId', { visitId })
			.andWhere('userId = :userId', { userId })
			.execute()

		return { message: 'Візит відредаговано' }
	}
}
