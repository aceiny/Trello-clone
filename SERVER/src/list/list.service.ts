import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { List } from './list.schema';
import { Model } from 'mongoose';
import { Board } from 'src/board/board.schema';
import { Types } from 'mongoose';
import { JwtDto } from 'src/jwt/jwt.dto';
import { ListDto } from './list.dto';

@Injectable()
export class ListService {
  constructor(
    @InjectModel(List.name)
    private listModel: Model<List>,
    @InjectModel(Board.name)
    private boardModel: Model<Board>,
  ) {}
  async CreateList(list: ListDto, boardId: string): Promise<List> {
    const listObj = await this.listModel.create({
      board: boardId,
      ...list,
    });
    if (!listObj) {
      throw new Error('List not created');
    }
    const board = await this.boardModel.findById(boardId);
    if (!board) {
      throw new NotFoundException('Board not found');
    }
    board.lists.push(listObj._id);
    await board.save();
    return listObj;
  }
  async GetAllLists(boardId: string , user : JwtDto): Promise<any[]> {
    const board = await this.boardModel.findById(boardId , user.id).populate('lists');
    if (!board) {
      throw new NotFoundException('Board not found');
    }
    if (!board.lists) {
      return [];
    }
    return board.lists;
  }
  async GetList(listId: string): Promise<List> {
    const list = await this.listModel.findById(listId);
    if (!list) {
      throw new NotFoundException('List not found');
    }
    return list;
  }
  async UpdateList(listId: string, list: ListDto): Promise<List> {
    const updatedList = await this.listModel.findByIdAndUpdate(listId, list, {
      new: true,
    });
    if (!updatedList) {
      throw new NotFoundException('List not found');
    }
    return updatedList;
  }
  async DeleteList(listId: string): Promise<any> {
    const deletedList = await this.listModel.findById(listId);
    if (!deletedList) {
      throw new NotFoundException('List not found');
    }
    const boardId = deletedList.board;
    const DeletedList = await this.listModel.findByIdAndDelete(listId);
    if (!DeletedList) {
      throw new NotFoundException('List not found');
    }
    const board = await this.boardModel.findById(boardId);
    if (!board) {
      throw new NotFoundException('Board not found');
    }
    board.lists = board.lists.filter(
      (list) => list.toString() != listId.toString(),
    );
    await board.save();
    return deletedList;
  }
  async ReOrderList(
    boardId: string,
    listId: string,
    position: number,
  ): Promise<any> {
    const board = await this.boardModel.findById(boardId);
    if (!board) {
      throw new NotFoundException('Board not found');
    }
    board.lists = board.lists.filter(
      (list) => list.toString() != listId.toString(),
    );
    board.lists.splice(position, 0, new Types.ObjectId(listId));
    await board.save();
    return board;
  }
}
