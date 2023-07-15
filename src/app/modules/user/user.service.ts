import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (payload: IUser): Promise<IUser> => {
  const createdUser = await User.create(payload);
  return createdUser;
};

const loginUser = async (payload: IUser) => {
  const { email, password } = payload;

  const user = new User();

  const isUserExists = await user.isUserExists(email);

  if (!isUserExists) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }

  if (
    isUserExists.password &&
    !(await user.isPasswordMatched(password, isUserExists.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Password not matched");
  }

  return isUserExists;
};

const addToWishlist = async (id: string, book: string) => {
  const result = await User.findByIdAndUpdate(
    id,
    {
      $push: { wishlist: book },
    },
    { new: true }
  );
  // console.log(result);

  return result;
};

const getSingleUser = async (id: string) => {
  const result = await User.findById(id);
  return result;
};

export const UserService = {
  createUser,
  loginUser,
  addToWishlist,
  getSingleUser,
};
