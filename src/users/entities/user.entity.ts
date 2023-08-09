import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { FileEntity } from '../../files/entities/file.entity'
import { VisitEntity } from '../../visits/entities/visit.entity'

@Entity('users')
export class UserEntity {
	@PrimaryGeneratedColumn()
	id: number

	@Column('varchar', { unique: true })
	email: string

	@Column()
	password: string

	@Column()
	name: string

	@Column()
	avatar: string

	@OneToMany(() => FileEntity, (file) => file.user)
	files: FileEntity[]

	@OneToMany(() => VisitEntity, (visit) => visit.user)
	visits: VisitEntity[]
}
