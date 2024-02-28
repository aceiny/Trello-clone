import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId, Types } from 'mongoose';
import { Card } from './card.schema';
import { List } from 'src/list/list.schema';

@Injectable()
export class CardService {
  constructor(
    @InjectModel(Card.name)
    private cardModel: Model<Card>,
    @InjectModel(List.name)
    private listModel: Model<List>,
  ) {}
  async CreateCard(card: any, listId: string): Promise<Card> {
    const cardObj = await this.cardModel.create({
      list: listId,
      ...card,
    });
    if (!cardObj) {
      throw new ConflictException('Card not created');
    }
    const list = await this.listModel.findById(listId);
    if (!list) {
      throw new ConflictException('List not found');
    }
    list.cards.push(cardObj._id);
    await list.save();
    return cardObj;
  }
  async GetListCards(listId: string): Promise<any[]> {
    const list = await this.listModel.findById(listId).populate('cards');
    if (!list) {
      throw new NotFoundException('List not found');
    }
    if (!list.cards) {
      return [];
    }
    return list.cards;
  }
  async GetCard(cardId: string): Promise<Card> {
    const card = await this.cardModel.findById(cardId);
    if (!card) {
      throw new NotFoundException('Card not found');
    }
    return card;
  }
  async UpdateCard(cardId: string, card: any): Promise<Card> {
    const updatedCard = await this.cardModel.findByIdAndUpdate(cardId, card, {
      new: true,
    });
    if (!updatedCard) {
      throw new NotFoundException('Card not found');
    }
    return updatedCard;
  }
  async DeleteCard(cardId: string): Promise<List> {
    const Card = await this.cardModel.findById(cardId);
    if (!Card) {
      throw new NotFoundException('Card not found');
    }
    const listId = Card.list;
    const list = await this.listModel.findById(listId);
    if (!list) {
      throw new NotFoundException('List not found');
    }
    try{
      await this.cardModel.findByIdAndDelete(cardId);
    }catch(err) {
      throw new NotFoundException('Card not found');
    }
    list.cards = list.cards.filter((card) => card.toString() !== cardId);
    await list.save();
    return list;
  }
  async ReOrderCard(
    listId: string,
    cardId: string,
    position: number,
  ): Promise<List> {
    position = Math.floor(position) - 1
    const list = await this.listModel.findById(listId);
    if (!list) {
      throw new NotFoundException('List not found');
    }
    if(!list.cards) {
      throw new NotFoundException('Card not found');
    }
    if(position < 0) {
      position = 0;
    }
    if(position > list.cards.length) {
      position = list.cards.length;
    }
    list.cards = list.cards.filter((card) => card.toString() !== cardId);
    list.cards.splice(position, 0, new Types.ObjectId(cardId));
    await list.save();
    return list;
  }
}
