import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { BoardService } from './board.service';
import { GetUser } from 'src/jwt/get-user.decorator';
import { Board } from './board.schema';
import { AuthGuard } from '@nestjs/passport';
import { BoardDto } from './board.dtos';

@Controller('board')
export class BoardController {
    constructor(
        private readonly boardService : BoardService,
    ){}
    
    @Get()
    @UseGuards(AuthGuard())
    async GetAllBoards(@GetUser() user){
        return await this.boardService.GetAllBoards(user)
    }
    @Get('/:id')
    @UseGuards(AuthGuard())
    async getBoard(@GetUser() user , @Param('id') boardId : string){
        return this.boardService.GetBoard(user , boardId )
    }
    @Post()
    @UseGuards(AuthGuard())
    CreateBody(@Body() board : BoardDto , @GetUser() user){
        return this.boardService.CreateBoard(board , user)
    }
    @Put('/:id')
    @UseGuards(AuthGuard())
    UpdateBoard(@Body() board : Board , @GetUser() user , @Param('id') boardId : string){
        return this.boardService.UpdateBoard(user , boardId , board)
    }
    @Delete('/:id')
    @UseGuards(AuthGuard())
    DeleteBoard(@GetUser() user , @Param('id') boardId : string){
        return this.boardService.DeleteBoard(user , boardId)
    }
}
