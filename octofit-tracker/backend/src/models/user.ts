import mongoose, { Document } from 'mongoose';

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UserDocument extends User, Document {}

const userSchema = new mongoose.Schema<UserDocument>(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const UserModel = mongoose.models.User || mongoose.model<UserDocument>('User', userSchema);
export default UserModel;
