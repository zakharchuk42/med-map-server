import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { ScriptEntity } from '../../scripts/entities/script.entity'

@Entity('drugs')
export class DrugEntity {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column()
	amount: string

	@Column()
	days: string

	@Column()
	startAt: Date

	@Column()
	endAt: Date

	@Column()
	time: string

	@ManyToOne(() => ScriptEntity, (script) => script.drugs, {
		onDelete: 'CASCADE',
	})
	script: ScriptEntity
}
