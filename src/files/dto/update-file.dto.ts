import { PartialType } from '@nestjs/mapped-types'
import { CreateFileDto } from './create-files.dto'

export class UpdateFileDto extends PartialType(CreateFileDto) {
	filename: string
	id: number
}
