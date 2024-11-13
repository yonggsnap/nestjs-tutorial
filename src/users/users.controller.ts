import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { role } from 'src/types';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {

    // This line is similar to 
    // const usersService = new UsersService
    constructor(private readonly usersService: UsersService) {}

    

    /*
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
    */

    @Get() // GET /users or /users?role=value
    findAll(@Query('role') role?: role) {
        return this.usersService.findAll(role);
    }

    @Get('interns') // GET /users/interns
    findAllInterns() {
        return [];
    }

    @Get(':id') // GET /users/:id
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(+id);
    }

    @Post() //POST /users
    create(@Body() user: {
        name: string,
        email: string,
        role: role
    }) {
        return this.usersService.create(user);
    }

    @Patch(':id') // PATCH /users/:id
    update(@Param('id') id: string, @Body() userUpdate: {
        name?: string,
        email?: string,
        role?: role
    }) {
        return this.usersService.update(+id, userUpdate);
    }

    @Delete(':id') // DELETE /users/:id
    delete(@Param('id') id: string) {
        return this.usersService.delete(+id);
    }
}
