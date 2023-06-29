import { IsDateString, IsEmpty } from 'class-validator';

export class QueryParamsDto {
  @IsDateString()
  @IsEmpty()
  start: string;

  @IsDateString()
  @IsEmpty()
  end: string;
}
