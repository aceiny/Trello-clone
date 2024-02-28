import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CardService } from './card.service';
import { CardDto, CardUpdateDto } from './card.dto';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get('all/:listId')
  GetCards(@Param('listId') listId: string) {
    return this.cardService.GetListCards(listId);
  }
  @Get('/:cardId')
  GetCard(@Param('cardId') cardId: string) {
    return this.cardService.GetCard(cardId);
  }
  @Post('')
  @UsePipes(ValidationPipe)
  CreateCard(@Param('listId') listId: string, @Body() card: CardUpdateDto) {
    return this.cardService.CreateCard(card, listId);
  }
  @Post('/:cardId/:listId')
  ReOrderCard(
    @Param('cardId') cardId: string,
    @Param('listId') listId: string,
    @Body('position') position: number,
  ) {
    return this.cardService.ReOrderCard(listId, cardId, position);
  }
  @Put('/:cardId')
  UpdateCard(@Param('cardId') cardId: string, @Body() card: CardDto) {
    return this.cardService.UpdateCard(cardId, card);
  }
  @Delete('/:cardId')
  DeleteCard(@Param('cardId') cardId: string) {
    return this.cardService.DeleteCard(cardId);
  }
}
