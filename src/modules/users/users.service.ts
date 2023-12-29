import { Injectable, } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entity/users.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
      ) {}

    getList() {
        return this.usersRepository.find();
    }

    queryOrCreateUserId(userReq: Users) {
        return this.usersRepository.findOneBy({
            id1: userReq.id1,
            id2: userReq.id2
        })
        .then((result) => {
            if (!result) {
                userReq.userId = uuidv4();
                this.usersRepository.save(userReq);
                return userReq;
            }
            return result;
        });
    }
}
