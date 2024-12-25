import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { MongoRepository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: MongoRepository<User>,
  ) {}

  async getAllUsers() {
    return await this.userRepo.find();
  }

  async getUserById(id: string) {
    let _result = await this.userRepo.findOne({
      where: { _id: new ObjectId(id) },
    });

    return _result;
  }

  async saveData(body: User) {
    if (!body.id) {
      return await this.userRepo.save(body);
    } else {
      let _result = await this.userRepo.update(body.id, body);
      return body;
    }
  }
}
