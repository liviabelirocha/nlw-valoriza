import { Request, Response, NextFunction } from "express";

const ensureAdmin = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const admin = false;

  if (admin) return next();

  return response.status(401).json({ error: "User is not admin" });
};

export { ensureAdmin };
