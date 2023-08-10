import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const users = mongoose.model('users', userSchema);

export default users;
