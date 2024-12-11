import { PartialType } from '@nestjs/mapped-types';
import { CreateFilehistoryDto } from './create-filehistory.dto';

export class UpdateFilehistoryDto extends PartialType(CreateFilehistoryDto) {}
