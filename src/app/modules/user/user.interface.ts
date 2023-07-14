import { Model } from "mongoose";

export type IUser = {
  email: string;
  password: string;
};

export interface IUserMethods {
  isUserExists(phoneNumber: string): Promise<Partial<IUser> | null>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
}

export type UserModel = Model<IUser, Record<string, unknown>, IUserMethods>;
