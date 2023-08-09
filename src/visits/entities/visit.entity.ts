import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	OneToOne,
} from 'typeorm'
import { ScriptEntity } from '../../scripts/entities/script.entity'
import { UserEntity } from '../../users/entities/user.entity'

export enum StatusEnum {
	PLANNED = 'planned',
	CONT = 'continues',
	DONE = 'done',
}

@Entity('visits')
export class VisitEntity {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	status: string

	@Column()
	doctors: string

	@Column()
	spec: string

	@Column()
	date: string

	@Column()
	city: string

	@Column()
	impression: string

	@Column()
	hospital: string

	@Column()
	efficiency: string

	@Column()
	phone: string

	@Column()
	online: string

	@Column()
	diagnose: string

	@OneToOne(() => ScriptEntity, (script) => script.visit)
	script: ScriptEntity

	@ManyToOne(() => UserEntity, (user) => user.visits, {
		onDelete: 'CASCADE',
	})
	user: UserEntity
}
