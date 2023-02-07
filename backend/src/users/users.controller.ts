import { Controller, Get, Post, Body, Param, Delete, ValidationPipe, ParseIntPipe, Put } from "@nestjs/common";
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('api/user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get(':id')
  async findId(@Param('id', new ParseIntPipe()) id) {
    return await this.usersService.findId(id);
  }

  @Put('edit')
  updateUsername(@Body() id, newUsername: string) {
    return this.usersService.updateUsername(id, newUsername);
  }

  @Delete(':id')
  remove(@Param('id', new ParseIntPipe()) id) {
    return this.usersService.remove(id);
  }
}
