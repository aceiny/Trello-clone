import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CardService } from './card.service';
import { CardDto, CardUpdateDto } from './card.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get('all/:listId')
  @UseGuards(AuthGuard())
  GetCards(@Param('listId') listId: string) {
    return this.cardService.GetListCards(listId);
  }
  @Get('/:cardId')
  @UseGuards(AuthGuard())
  GetCard(@Param('cardId') cardId: string) {
    return this.cardService.GetCard(cardId);
  }
  @Post('/:listId')
  @UseGuards(AuthGuard())
  @UsePipes(ValidationPipe)
  CreateCard(@Param('listId') listId: string, @Body() card: CardDto) {
    return this.cardService.CreateCard(card, listId);
  }
  @Post('/:cardId/:listId')
  @UseGuards(AuthGuard())
  ReOrderCard(
    @Param('cardId') cardId: string,
    @Param('listId') listId: string,
    @Body('position') position: number,
  ) {
    if (!position) {
      throw new ConflictException('position is required');
    }
    return this.cardService.ReOrderCard(listId, cardId, position);
  }
  @Put('/:cardId')
  @UseGuards(AuthGuard())
  UpdateCard(@Param('cardId') cardId: string, @Body() card: CardUpdateDto) {
    return this.cardService.UpdateCard(cardId, card);
  }
  @Delete('/:cardId')
  @UseGuards(AuthGuard())
  DeleteCard(@Param('cardId') cardId: string) {
    return this.cardService.DeleteCard(cardId);
  }
}
