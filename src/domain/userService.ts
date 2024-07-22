import {UserRepository} from './userRepository';

export class UserService {
  userRepository: UserRepository;
  constructor(userRepository: any) {
    this.userRepository = userRepository;
  }
  async login() {
    return await this.userRepository.login();
  }
}
