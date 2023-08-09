import {
	Column,
	Entity,
	JoinColumn,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
} from 'typeorm'
import { VisitEntity } from '../../visits/entities/visit.entity'
import { DrugEntity } from '../../drugs/entities/drug.entity'
import { FileEntity } from '../../files/entities/file.entity'

@Entity('scripts')
export class ScriptEntity {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column()
	analyses: string

	@Column()
	otherNotes: string

	@Column()
	userId: string

	@OneToMany(() => DrugEntity, (drug) => drug.script)
	drugs: DrugEntity[]

	@OneToOne(() => VisitEntity, (visit) => visit.script, {
		onDelete: 'CASCADE',
	})
	@JoinColumn()
	visit: VisitEntity

	@OneToMany(() => FileEntity, (files) => files.script)
	files: FileEntity[]
}
