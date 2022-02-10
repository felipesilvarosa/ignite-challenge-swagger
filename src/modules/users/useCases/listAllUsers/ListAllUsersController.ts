import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const user_id = request.headers.user_id as string;
      const userList = this.listAllUsersUseCase.execute({ user_id });
      return response.status(200).json(userList);
    } catch (error) {
      return response.status(400).send({
        error: error.message,
      });
    }
  }
}

export { ListAllUsersController };
