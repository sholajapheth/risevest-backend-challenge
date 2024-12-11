import { PartialType } from '@nestjs/mapped-types';
import { CreateUnsafeFileDto } from './create-unsafe-file.dto';

export class UpdateUnsafeFileDto extends PartialType(CreateUnsafeFileDto) {}
