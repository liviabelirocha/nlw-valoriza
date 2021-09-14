import { Router } from "express";

import { CreateUsersController } from "./controllers/CreateUserController";

const router = Router();

const createUserController = new CreateUsersController();

router.post("/users", createUserController.handle);

export { router };
