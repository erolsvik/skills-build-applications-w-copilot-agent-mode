"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const workout_1 = __importDefault(require("../models/workout"));
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    const workouts = await workout_1.default.find().lean();
    res.json(workouts);
});
router.get('/:id', async (req, res) => {
    const workout = await workout_1.default.findOne({ id: req.params.id }).lean();
    if (!workout) {
        return res.status(404).json({ message: 'Workout not found' });
    }
    res.json(workout);
});
router.post('/', async (req, res) => {
    const { title, durationMinutes, difficulty } = req.body;
    const count = await workout_1.default.countDocuments();
    const newWorkout = new workout_1.default({
        id: `w${count + 1}`,
        title: title || `Workout ${count + 1}`,
        durationMinutes: durationMinutes || 30,
        difficulty: difficulty || 'beginner',
    });
    await newWorkout.save();
    res.status(201).json(newWorkout);
});
exports.default = router;
