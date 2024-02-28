import { IsNotEmpty } from 'class-validator';

export class CardDto {
  @IsNotEmpty()
  name: string;
  description: string;
}
export class CardUpdateDto {
  name: string;
  description: string;
  dueDate: Date;
  labels: string[];
  status: string;
  list: string;
  attachments: string[];
}
