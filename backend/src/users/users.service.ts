import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from "./entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";


@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private _users: Repository<User>) {}
  create(createUserDto: CreateUserDto) : Promise<User> {
    const user = this._users.create(createUserDto);
    return this._users.save(user);
  }

  findId(id: number) : Promise<User | undefined> {
    return this._users.findOneBy({id: id});
  }
  findUsername(username: string) : Promise<User | undefined> {
    return this._users.findOneBy({username: username});
  }

  async updateUsername(id: number, newUsername: string) {
    const user = await this._users.preload({
      id: id,
      username: newUsername
    });
    return await this._users.save(user);
  }

  async remove(id: number) {
    const user = await this._users.findOneBy({id: id});
    await this._users.remove(user);
  }
}
