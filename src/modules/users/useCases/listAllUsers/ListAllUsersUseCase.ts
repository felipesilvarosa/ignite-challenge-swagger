import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);
    const isAdmin = user.admin;

    if (isAdmin) {
      return this.usersRepository.list();
    }

    throw new Error("You are not an admin");
  }
}

export { ListAllUsersUseCase };
