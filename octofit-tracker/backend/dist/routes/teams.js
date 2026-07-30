"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const team_1 = __importDefault(require("../models/team"));
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    const teams = await team_1.default.find().lean();
    res.json(teams);
});
router.get('/:id', async (req, res) => {
    const team = await team_1.default.findOne({ id: req.params.id }).lean();
    if (!team) {
        return res.status(404).json({ message: 'Team not found' });
    }
    res.json(team);
});
router.post('/', async (req, res) => {
    const { name, members } = req.body;
    const count = await team_1.default.countDocuments();
    const newTeam = new team_1.default({
        id: `t${count + 1}`,
        name: name || `Team ${count + 1}`,
        members: Array.isArray(members) ? members : [],
    });
    await newTeam.save();
    res.status(201).json(newTeam);
});
exports.default = router;
