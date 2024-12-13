import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { createCipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly configService: ConfigService
  ) {}

  async create(createUserDto: CreateUserDto) {
    const iv = randomBytes(16)
    const password = this.configService.get<string>("ENCRYPTION_PASSWORD") 

    if(!password){
      throw new Error("Encryption password is nor set in the env varibales.")
    }

    const userPassword = createUserDto.password

    const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer
    const cipher = createCipheriv('aes-256-ctr', key, iv)

    // Encrypting user password here -- haktua stuf (main char energy)
    const encryptedPassword = Buffer.concat([
      cipher.update(userPassword),
      cipher.final(),
    ])

    // Create a new user with the encryptted password     
    const user = this.usersRepository.create({
      ...createUserDto,
      password: encryptedPassword.toString('hex')  // store exnrypted password as a hex string - to give main char energy 😒 thats wassup
    });

    return this.usersRepository.save(user);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOneEmail(email: string) {
    const user = this.usersRepository.findOne({
      where: {
        email,
      },
    });
    return user;
  }
  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOne({where: {id}})

    if(!user){
      throw new Error(`User with ID ${id} not found`)
    }
    Object.assign(user, updateUserDto)
    return this.usersRepository.save(user)
  }

  async remove(id: number) {
    const user = await this.usersRepository.findOne({where: {id}})

    if(!user){
      throw new Error(`User with ID ${id} not found `)
    }
    return this.usersRepository.remove(user)
  }
}
