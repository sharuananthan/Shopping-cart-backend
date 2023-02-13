import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';


export class UpdateUserDto extends PartialType(CreateUserDto) {
    userId?: number;
    userName?: string;
    email?: string;
    password?: string;
    
}
