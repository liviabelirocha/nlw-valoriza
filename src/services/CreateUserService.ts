import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {
    const usersReposity = getCustomRepository(UsersRepositories);

    if (!email) throw new Error("Incorrect email");

    const userAlreadyExists = await usersReposity.findOne({ email });

    if (userAlreadyExists) throw new Error("User already exists");

    const user = usersReposity.create({
      name,
      email,
      admin,
    });

    await usersReposity.save(user);

    return user;
  }
}

export { CreateUserService };
