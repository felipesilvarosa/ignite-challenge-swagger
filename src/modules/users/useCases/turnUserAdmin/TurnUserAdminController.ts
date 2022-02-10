import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    try {
      const userToAdmin = this.turnUserAdminUseCase.execute({ user_id });

      return response.json(userToAdmin).send();
    } catch (error) {
      return response.status(404).send({
        error: error.message,
      });
    }
  }
}

export { TurnUserAdminController };
