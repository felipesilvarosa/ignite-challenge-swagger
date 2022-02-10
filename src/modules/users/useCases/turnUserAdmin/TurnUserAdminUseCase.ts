import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userToAdmin = this.usersRepository.findById(user_id);
    if (userToAdmin) {
      return this.usersRepository.turnAdmin(userToAdmin);
    }
    throw new Error("User not found");
  }
}

export { TurnUserAdminUseCase };
