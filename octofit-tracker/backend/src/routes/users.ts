import { Router } from 'express';
import UserModel from '../models/user';

const router = Router();

router.get('/', async (_req, res) => {
  const users = await UserModel.find().lean();
  res.json(users);
});

router.get('/:id', async (req, res) => {
  const user = await UserModel.findOne({ id: req.params.id }).lean();
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
});

router.post('/', async (req, res) => {
  const { name, email } = req.body;
  const count = await UserModel.countDocuments();
  const newUser = new UserModel({
    id: `u${count + 1}`,
    name: name || `User ${count + 1}`,
    email: email || `user${count + 1}@example.com`,
  });

  await newUser.save();
  res.status(201).json(newUser);
});

export default router;
