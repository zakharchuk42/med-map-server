import { CreateFileDto } from './create-files.dto';
declare const UpdateFileDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateFileDto>>;
export declare class UpdateFileDto extends UpdateFileDto_base {
    filename: string;
    id: number;
}
export {};
