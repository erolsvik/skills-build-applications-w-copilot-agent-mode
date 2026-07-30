import { Router } from 'express';
import ActivityModel from '../models/activity';

const router = Router();

router.get('/', async (_req, res) => {
  const activities = await ActivityModel.find().lean();
  res.json(activities);
});

router.get('/:id', async (req, res) => {
  const activity = await ActivityModel.findOne({ id: req.params.id }).lean();
  if (!activity) {
    return res.status(404).json({ message: 'Activity not found' });
  }
  res.json(activity);
});

router.post('/', async (req, res) => {
  const { userId, type, durationMinutes, calories } = req.body;
  const count = await ActivityModel.countDocuments();
  const newActivity = new ActivityModel({
    id: `a${count + 1}`,
    userId: userId || 'u1',
    type: type || 'workout',
    durationMinutes: durationMinutes || 30,
    calories: calories || 0,
  });

  await newActivity.save();
  res.status(201).json(newActivity);
});

export default router;
