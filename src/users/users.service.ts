import { Injectable, NotFoundException } from '@nestjs/common';
import { role } from 'src/types';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "email": "Sincere@april.biz",
            "role": "INTERN",
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "email": "Shanna@melissa.tv",
            "role": "INTERN",
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "email": "Nathan@yesenia.net",
            "role": "ENGINEER",
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "email": "Julianne.OConner@kory.org",
            "role": "ENGINEER",
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "email": "Lucio_Hettinger@annie.ca",
            "role": "ADMIN",
        }
    ]

    findAll(role? : role) {
        if (role) {
            const users = this.users.filter((user) => user.role === role);
            if (users.length < 1) {
                throw new NotFoundException('Role not found')
            }
            return users
        }
        return this.users
    }

    findOne(id: number) {
        const user = this.users.find((user) => user.id === id);

        if (!user) {
            throw new NotFoundException('User not found')
        }
        return user
    }

    create (createUserDto: CreateUserDto) {
        // Get the id of user with highest id
        const maxId = Math.max(...this.users.map((user) => user.id));

        // Create new user object
        const newUser = {
            id: maxId + 1,
            ...createUserDto
        }

        this.users.push(newUser);
        return newUser
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        this.users = this.users.map((user) => {
            if (user.id === id) {
                return {
                    ...user,
                    ...updateUserDto
                }
            }
            return user
        })

        return this.findOne(id)
    }

    delete(id: number) {
        const removedUser = this.findOne(id);
        this.users = this.users.filter((user) => user.id !== id);
        return removedUser
    }
}
