import { PartialType } from '@nestjs/mapped-types';
import { CreateCompressionDto } from './create-compression.dto';

export class UpdateCompressionDto extends PartialType(CreateCompressionDto) {}
