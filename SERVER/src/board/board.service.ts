import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Board } from './board.schema';
import { BoardModule } from './board.module';
import { JwtDto } from 'src/jwt/jwt.dto';
import { NotFoundError } from 'rxjs';

@Injectable()
export class BoardService {
    constructor(
        @InjectModel(Board.name)
        private boardModel : Model<Board>,
    ) {}
    async CreateBoard(board : Board , user ) : Promise<Board> {
        const boardObj = await this.boardModel.create({
            user : user.id, 
            ...board
        })
        if(!boardObj){
            throw new ConflictException('board not created try again')
        }
        return boardObj
    }
    async GetAllBoards(user) : Promise<Board[]> {
        const boards = await this.boardModel.find({
            user : user.id
        })
        return boards
    }
    async GetBoarder(user : JwtDto , boardId : string) : Promise<Board> {
        const board = await this.boardModel.findOne({
            user : user.id,
            _id : boardId
        })
        if(!board) {
            throw new NotFoundException('Board not found')
        }
        return board
    }
}
