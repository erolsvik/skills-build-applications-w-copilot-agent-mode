import { Router } from 'express';
import WorkoutModel from '../models/workout';

const router = Router();

router.get('/', async (_req, res) => {
  const workouts = await WorkoutModel.find().lean();
  res.json(workouts);
});

router.get('/:id', async (req, res) => {
  const workout = await WorkoutModel.findOne({ id: req.params.id }).lean();
  if (!workout) {
    return res.status(404).json({ message: 'Workout not found' });
  }
  res.json(workout);
});

router.post('/', async (req, res) => {
  const { title, durationMinutes, difficulty } = req.body;
  const count = await WorkoutModel.countDocuments();
  const newWorkout = new WorkoutModel({
    id: `w${count + 1}`,
    title: title || `Workout ${count + 1}`,
    durationMinutes: durationMinutes || 30,
    difficulty: difficulty || 'beginner',
  });

  await newWorkout.save();
  res.status(201).json(newWorkout);
});

export default router;
