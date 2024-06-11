import User from '../models/userModel';
import catchAsync from '../utils/catchAsync';
import { Request, Response, NextFunction } from "express";

const getUsers = catchAsync(async(req: Request, res: Response, next: NextFunction) => {
  const users = await User.find();
  res.status(200).json({
    status: "success",
    results: users.length,
    data: {
      users
    }
  })
})

const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const newUser = await User.create(req.body)
  res.status(201).json({
    status: "success",
    data: {
      user: newUser,
    },
  });
})

const getUser = catchAsync(async(req: Request, res: Response, next: NextFunction) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).json({ status: "fail", message: "user not found" });
  }

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
})

const updateUser = catchAsync(async(req: Request, res: Response, next: NextFunction) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true, // send back the new updated user object
    runValidators: true, // run the validators on the updated object
  });

  if (!user) {
    return res.status(404).json({ status: "fail", message: "user not found" });
  }

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
})

const deleteUser = catchAsync(async(req: Request, res: Response, next: NextFunction) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if (!user) {
    return res.status(404).json({ status: "fail", message: "user not found" });
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
})


export {getUsers, createUser, getUser, updateUser, deleteUser}

