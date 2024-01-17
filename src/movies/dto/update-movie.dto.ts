import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';
// 유효성 검사
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
