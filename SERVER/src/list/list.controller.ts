import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
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
    @Get('/all/:id')
    @UseGuards(AuthGuard())
    GetAllLists(@GetUser() user , @Param('id') boardId : string){
        return this.listService.GetAllLists(boardId,user)
    }
    @Get('/:id')
    @UseGuards(AuthGuard())
    GetList(@Param('id') listId : string){
        return this.listService.GetList(listId)
    }
    @Post('/:id')
    @UseGuards(AuthGuard())
    CreateList(@Param('id') boardId : string , @Body() list : ListDto){
        return this.listService.CreateList(list , boardId)
    }
    @Post('/:listId/:boardId')
    @UseGuards(AuthGuard())
    ReOrderList(@Param('listId') listId : string , @Param('boardId') boardId : string , @Body('position') position : number){
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
