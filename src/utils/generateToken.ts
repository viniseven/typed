import jwt from "jsonwebtoken";

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "DEFAULT_KEY";
const JWT_EXPIRES_IN = "1d";

export interface UserTokenCredentials {
  id: string;
  username: string;
}

export function generatedToken({ id, username }: UserTokenCredentials) {
  return jwt.sign(
    {
      id,
      username
    },
    JWT_SECRET_KEY,
    {
      expiresIn: JWT_EXPIRES_IN
    }
  );
}
