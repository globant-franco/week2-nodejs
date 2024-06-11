import { Document, model, Schema } from "mongoose";
const validator = require("validator");

interface IUser extends Document {
  name: string;
  email: string;
  role?: string;
  active?: boolean;
  password?: string;
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, "A User must have a name"],
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
    required: [true, "A user must have an email"],
  },
  role: {
    type: String,
  },
  active: {
    type: Boolean,
  },
  password: {
    type: String,
  },
});

// 3. Create a Model.
const UserModel = model<IUser>('User', userSchema);

export default UserModel;
