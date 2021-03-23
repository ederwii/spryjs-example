import { AuthConfig } from "@codiks/spryjs";
import userModel from "./entities/user.model";

export const PORT = process.env.PORT;
export const TOKEN_SECRET = process.env.TOKEN_SECRET;
export const SALT = process.env.SALT;
export const MONGO_CS = process.env.MONGO_CS;

export const AUTH_CONFIG: AuthConfig = {
  tokenSecret: process.env.TOKEN_SECRET || '',
  salt: process.env.SALT || '',
  model: userModel,
  expiresIn: 86400,
  route: '/user'
}