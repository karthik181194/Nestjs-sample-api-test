import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('getAllUsers')
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }

  @Get('getUserById/:id')
  async getUserById(@Param('id') id: string) {
    return await this.userService.getUserById(id);
  }

  @Post('saveData')
  async saveData(@Body() body: User) {
    return this.userService.saveData(body);
  }
}
