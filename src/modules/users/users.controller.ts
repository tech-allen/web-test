import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(
    private readonly usersService: UsersService
    ) {}

    @Get()
    queryAll() {
        return this.usersService.getList();
    }

    @Post('user-id')
    queryOrCreateUserId(@Body() userReq) {
        console.log(userReq);
        return this.usersService.queryOrCreateUserId(userReq);
    }

}
