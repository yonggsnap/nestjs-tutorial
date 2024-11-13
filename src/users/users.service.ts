import { Injectable } from '@nestjs/common';
import { role } from 'src/types';

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
            return this.users.filter((user) => user.role === role);
        }
        return this.users
    }

    findOne(id: number) {
        return this.users.find((user) => user.id === id);
    }

    create (user: {
        name: string,
        email: string,
        role: role
    }) {
        // Get the id of user with highest id
        const maxId = Math.max(...this.users.map((user) => user.id));

        // Create new user object
        const newUser = {
            id: maxId + 1,
            ...user
        }

        this.users.push(newUser);
        return newUser
    }

    update(id: number, updatedUser: {
        name?: string,
        email?: string,
        role?: role
    }) {
        this.users = this.users.map((user) => {
            if (user.id === id) {
                return {
                    ...user,
                    ...updatedUser
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
