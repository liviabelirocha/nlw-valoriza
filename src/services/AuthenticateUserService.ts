import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IUserRequest) {
    const usersReposity = getCustomRepository(UsersRepositories);

    const user = await usersReposity.findOne({ email });

    if (!user) throw new Error("Email/Password incorrect");

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) throw new Error("Email/Password incorrect");

    const token = sign(
      { email: user.email },
      "d45e1f69c0d097d78291d0f478fdd9d4",
      { subject: user.id, expiresIn: "1d" }
    );

    return token;
  }
}

export { AuthenticateUserService };
