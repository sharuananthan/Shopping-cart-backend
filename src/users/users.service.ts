import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private readonly users: User[]=[
            {
            id: 1,
            name: 'sharu',
            email: 'sharu@gmail.com',
            password: 'Ssharu'}
        
    ];

    // constructor(
    //     @InjectRepository(User) private readonly usersRepository: Repository<User>
    // ) { }

    // create(createUserDto: CreateUserDto) {
    //     const user = this.usersRepository.create(createUserDto);
    //     return this.usersRepository.save(user);
    // }

    // findAll() {
    //     return this.usersRepository.find();
    // }

   
    findByEmail(email:string):Promise<User | undefined>{
        const user = this.users.find((user) => user.email === email);
        if(user){
            return Promise.resolve(user);
        }
        return undefined;
    }

    findOne(id: number): Promise<User | undefined> {
        const user = this.users.find((user) => user.id === id);
        if (user) {
          return Promise.resolve(user);
        }
        return undefined;
      }
}
