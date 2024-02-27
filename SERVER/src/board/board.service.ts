import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Board } from './board.schema';
import { JwtDto } from 'src/jwt/jwt.dto';
import { BoardDto } from './board.dtos';

@Injectable()
export class BoardService {
    constructor(
        @InjectModel(Board.name)
        private boardModel : Model<Board>,
    ) {}
    async CreateBoard(board : BoardDto , user : JwtDto ) : Promise<Board> {
        const boardObj = await this.boardModel.create({
            user : user.id, 
            ...board
        })
        if(!boardObj){
            throw new ConflictException('board not created try again')
        }
        return boardObj
    }
    async GetAllBoards(user : JwtDto) : Promise<Board[]> {
        const boards = await this.boardModel.find({
            user : user.id
        })
        return boards
    }
    async GetBoard(user : JwtDto , boardId : string) : Promise<Board> {
        const board = await this.boardModel.findOne({
            user : user.id,
            _id : boardId
        })
        if(!board) {
            throw new NotFoundException('Board not found')
        }
        return board
    }
    async UpdateBoard(user : JwtDto , boardId : string , board : Board) : Promise<Board> {
        const updatedBoard = await this.boardModel.findOneAndUpdate({
            user : user.id,
            _id : boardId
        },board,{new : true})
        if(!updatedBoard){
            throw new NotFoundException('Board not found')
        }
        return updatedBoard
    }
    async DeleteBoard(user : JwtDto , boardId : string) : Promise<Board> {
        const deletedBoard = await this.boardModel.findOneAndDelete({
            user : user.id,
            _id : boardId
        })
        if(!deletedBoard){
            throw new NotFoundException('Board not found')
        }
        return deletedBoard
    }
}
