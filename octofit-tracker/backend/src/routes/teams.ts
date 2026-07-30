import { Router } from 'express';
import TeamModel from '../models/team';

const router = Router();

router.get('/', async (_req, res) => {
  const teams = await TeamModel.find().lean();
  res.json(teams);
});

router.get('/:id', async (req, res) => {
  const team = await TeamModel.findOne({ id: req.params.id }).lean();
  if (!team) {
    return res.status(404).json({ message: 'Team not found' });
  }
  res.json(team);
});

router.post('/', async (req, res) => {
  const { name, members } = req.body;
  const count = await TeamModel.countDocuments();
  const newTeam = new TeamModel({
    id: `t${count + 1}`,
    name: name || `Team ${count + 1}`,
    members: Array.isArray(members) ? members : [],
  });

  await newTeam.save();
  res.status(201).json(newTeam);
});

export default router;
