import { Router } from 'express';
import LeaderboardModel from '../models/leaderboard';

const router = Router();

router.get('/', async (_req, res) => {
  const entries = await LeaderboardModel.find().sort({ rank: 1 }).lean();
  res.json(entries);
});

export default router;
