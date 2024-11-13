import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { role } from 'src/types';


@Controller('users')
export class UsersController {

    // This line is similar to 
    // const usersService = new UsersService

    

    /*
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
    */

    @Get() // GET /users or /users?role=value
    findAll(@Query('role') role?: role) {
        return [];
    }

    @Get('interns') // GET /users/interns
    findAllInterns() {
        return [];
    }

    @Get(':id') // GET /users/:id
    findOne(@Param('id') id: string) {
        return { id };
    }

    @Post() //POST /users
    create(@Body() user: {}) {
        return user;
    }

    @Patch(':id') // PATCH /users/:id
    update(@Param('id') id: string, @Body() userUpdate: {}) {
        return { id, ...userUpdate };
    }

}
