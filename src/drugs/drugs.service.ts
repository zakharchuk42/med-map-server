import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { DrugEntity } from './entities/drug.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { CreateDrugDto } from './dto/create-drug.dto'

@Injectable()
export class DrugsService {
	constructor(
		@InjectRepository(DrugEntity)
		private repository: Repository<DrugEntity>,
	) {}

	async addDrugs(scriptId: number, drugs: CreateDrugDto) {
		let endDate = new Date(drugs.startAt)
		endDate.setDate(endDate.getDate() + (Number(drugs.days) - 1))

		await this.repository
			.createQueryBuilder('drugs')
			.insert()
			.values({
				...drugs,
				endAt: endDate,
				script: { id: scriptId },
			})
			.execute()

		return { message: 'План лікування добавлено' }
	}

	async removeDrugs(drugsId: string) {
		await this.repository
			.createQueryBuilder('drugs')
			.delete()
			.where('id = :drugsId', { drugsId })
			.execute()

		return { message: 'Ліки видалено' }
	}
}
