import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

const ensureAuthenticated = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authToken = request.headers.authorization;

  if (!authToken) return response.status(401).end();

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(
      token,
      "d45e1f69c0d097d78291d0f478fdd9d4"
    ) as IPayload;

    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).end();
  }
};

export { ensureAuthenticated };
