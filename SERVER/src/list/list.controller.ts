import { Body, ConflictException, Controller, Delete, Get, Param, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ListService } from './list.service';
import { GetUser } from 'src/jwt/get-user.decorator';
import { AuthGuard } from '@nestjs/passport';
import { ListDto } from './list.dto';
import { Board } from 'src/board/board.schema';

@Controller('list')
export class ListController {
    constructor(
        private readonly listService: ListService,
    ) {}
    @Get('/all/:boardId')
    @UseGuards(AuthGuard())
    GetAllLists(@GetUser() user , @Param('boardId') boardId : string){
        return this.listService.GetAllLists(boardId,user)
    }
    @Get('/:id')
    @UseGuards(AuthGuard())
    GetList(@Param('id') listId : string){
        return this.listService.GetList(listId)
    }
    @Post('/:boardId')
    @UsePipes(ValidationPipe)
    @UseGuards(AuthGuard())
    CreateList(@Param('boardId') boardId : string , @Body() list : ListDto){
        return this.listService.CreateList(list , boardId)
    }
    @Post('/:listId/:boardId')
    @UseGuards(AuthGuard())
    ReOrderList(@Param('listId') listId : string , @Param('boardId') boardId : string , @Body('position') position : number){
        if(!position) {
            throw new ConflictException('position is required')
        }
        return this.listService.ReOrderList( boardId , listId ,position)
    }
    @Put('/:id')
    @UseGuards(AuthGuard())
    UpdateList(@Param('id') listId : string , @Body() list : ListDto){
        return this.listService.UpdateList(listId , list)
    }
    @Delete('/:id')
    @UseGuards(AuthGuard())
    DeleteList(@Param('id') listId : string , @Param('boardId') boardId : string){
        return this.listService.DeleteList(listId)
    }

}
