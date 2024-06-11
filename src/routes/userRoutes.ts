import express from "express";
const userRouter = express.Router();
import {getUsers, createUser, getUser, updateUser, deleteUser} from '../controllers/usersController'

userRouter
  .route("/")
  .get(getUsers)
  .post(createUser);

userRouter
  .route("/:id")
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

export default userRouter;
